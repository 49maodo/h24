import { useGetCodeQuery } from "@/features/Code/codeSlice";
import type { Code } from "@/types/Code";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function getCard(
  code: Code,
  getCategoryColor: (category: string) => string,
  copyToClipboard: (code: string) => Promise<void>,
) {
  return (
    <Card key={code.id} className="shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="px-6 flex flex-col gap-2">
        <CardTitle className="text-lg">{code.titre}</CardTitle>
        <p className="text-sm text-gray-500">{code.description}</p>
      </CardHeader>
      <CardContent className="px-6">
        <div
          className={`w-16 mb-2 px-3 py-1 rounded-full text-xs font-medium 
                ${getCategoryColor(code.categorie)}`}
        >
          {code.categorie}
        </div>
        <pre
          className="text-sm bg-gray-100 rounded p-3 font-mono overflow-x-auto
              text-left whitespace-pre-wrap"
        >
          <code>{code.code}</code>
        </pre>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-xs text-muted-foreground">
          {code.created_at
            ? new Date(code.created_at).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "Date inconnue"}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => copyToClipboard(code.code)}
        >
          <Copy className="w-4 h-4 mr-1" />
          Copier
        </Button>
      </CardFooter>
    </Card>
  );
}

export const Liste = () => {
  const { data, isLoading, error } = useGetCodeQuery();

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      alert("Code copié !");
    } catch {
      alert("Erreur lors de la copie");
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      php: "bg-purple-100 text-purple-800",
      html: "bg-orange-100 text-orange-800",
      css: "bg-blue-100 text-blue-800",
    };
    return colors[category.toLowerCase()] || "bg-gray-100 text-gray-800";
  };

  if (isLoading) {
    return (
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-[200px] w-full rounded-lg" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center">
        Erreur : {JSON.stringify(error)}
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((code: Code) =>
          getCard(code, getCategoryColor, copyToClipboard),
        )}
      </div>
    </div>
  );
};

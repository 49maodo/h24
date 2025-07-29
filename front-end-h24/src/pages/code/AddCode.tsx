import { Card, CardContent, CardHeader } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";
import FormCode from "@/components/form/FormCode.tsx";

export const AddCode = () => {
  return (
    <div>
      <Card className={"max-w-3xl mx-auto mb-4"}>
        <CardHeader>
          <Button asChild variant="outline" className="w-48">
            <Link to={"/"}>Retour à la liste des codes</Link>
          </Button>
        </CardHeader>
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Ajouter un nouveau code</h2>
          <FormCode />
        </CardContent>
      </Card>
    </div>
  );
};

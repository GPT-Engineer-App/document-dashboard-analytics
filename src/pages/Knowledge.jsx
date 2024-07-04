import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Knowledge = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    console.log("File uploaded:", file);
  };

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Upload Document</CardTitle>
        </CardHeader>
        <CardContent>
          <Input type="file" onChange={handleFileChange} />
          <Button onClick={handleUpload} className="mt-4">
            Upload
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Knowledge;
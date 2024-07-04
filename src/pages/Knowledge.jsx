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
      <Card className="glow-on-hover glow-on-active">
        <CardHeader>
          <CardTitle>Upload Document</CardTitle>
        </CardHeader>
        <CardContent>
          <Input type="file" onChange={handleFileChange} className="glow-on-hover glow-on-active" />
          <Button onClick={handleUpload} className="mt-4 glow-on-hover glow-on-active">
            Upload
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Knowledge;
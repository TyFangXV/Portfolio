#!/bin/bash

# Define the name of the output file
output_file="image.tsx"

# Begin the file with an import statement for React
echo "import * as React from 'react';" > $output_file

# Loop through all the image files in the asset directory
for image_file in src/Assets/*.svg; do
  # Extract the filename without the extension
  filename=$(basename "$image_file" .svg)

  # Capitalize the first letter of the filename
  capitalized_filename="$(tr '[:lower:]' '[:upper:]' <<< ${filename:0:1})${filename:1}"

  # Generate a component for the image file
  import_title="${capitalized_filename}Pic"
  echo "import ${import_title} from './${image_file}';" >> $output_file
  echo "export const ${capitalized_filename}Pic:React.FC<{width:number, height:number, className?:string}> = (data) => {return <img src={${import_title}} width={data.width} height={data.height} alt='${filename}' className={data.className}/>};" >> $output_file
done

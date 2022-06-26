//Helper para convertir un string a TitleCase
export const toTitleCase = (str: string | null | undefined) => {
    if (str != null){
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
    }
  }
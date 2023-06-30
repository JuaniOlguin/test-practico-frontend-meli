export default function currencyDisplay(currency: string) {
  const getCurrencySymbol = (currencyCode: string) => {
     const currencySymbols: any = {
      USD: 'U$S',
      EUR: '€',
      ARS: '$',
    };

    return currencySymbols[currencyCode] || currencyCode;
  };

  const currencySymbol = getCurrencySymbol(currency);

  return currencySymbol + ' ';
}
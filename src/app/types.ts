export type TransactionType = {
  id: string;
  date: Date;
  amount: number;
  correspondent: string;
};
export type invoicesStatisticsType = {
  totalInvoices: number;
  paidInvoices: number;
  unpaidInvoices: number;
  totalInvoicesSent: number;
};

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
export enum InvoiceEnumType {
  incoming,
  outcoming,
}
export enum InvoiceEnumPeriod {
  dayly,
  weekly,
  mounthly,
  annually,
}
export type InvoiceType = {
  id: number;
  date: Date;
  amount: number;
  name: string;
  invoiceType: number;
  period: number;
};
export type UserType = {
  email: string;
  password: string;
  name: string;
};

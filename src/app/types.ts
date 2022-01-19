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
  incoming = 'incoming',
  outcoming = 'outcoming',
}
export enum InvoiceEnumPeriod {
  dayly = 'daily',
  weekly = 'weekly',
  mounthly = 'mounthly',
  annually = 'annually',
}
export type InvoiceType = {
  id: number;
  date: Date;
  amount: number;
  name: string;
  invoiceType: InvoiceEnumType;
  period: InvoiceEnumPeriod;
};
export type UserType = {
  email: string;
  password: string;
  name: string;
};
export type InvoiceDir = {
  type: number;
  text: string;
};

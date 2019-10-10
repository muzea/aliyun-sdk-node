interface ApplyInvoiceRequest {
    "RegionId"?: string;
    "InvoiceAmount": number;
    "CustomerId": number;
    "AddressId": number;
    "ApplyUserNick": string;
    "SelectedIds": number[];
    "OwnerId"?: number;
    "InvoicingType"?: number;
    "ProcessWay"?: number;
    "InvoiceByAmount"?: boolean;
}
export { ApplyInvoiceRequest };
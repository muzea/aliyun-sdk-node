interface BatchSendMailRequest {
    "RegionId"?: string;
    "TemplateName": string;
    "AccountName": string;
    "ReceiversName": string;
    "AddressType": number;
    "OwnerId"?: number;
    "TagName"?: string;
    "ReplyAddress"?: string;
    "ReplyAddressAlias"?: string;
    "ClickTrace"?: string;
}
export { BatchSendMailRequest };
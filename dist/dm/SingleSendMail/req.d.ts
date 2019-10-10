interface SingleSendMailRequest {
    "RegionId"?: string;
    "AccountName": string;
    "AddressType": number;
    "ReplyToAddress": boolean;
    "ToAddress": string;
    "Subject": string;
    "OwnerId"?: number;
    "TagName"?: string;
    "HtmlBody"?: string;
    "TextBody"?: string;
    "FromAlias"?: string;
    "ReplyAddress"?: string;
    "ReplyAddressAlias"?: string;
    "ClickTrace"?: string;
}
export { SingleSendMailRequest };
export interface SendOutboundCommandRequest {
    "InstanceId": string;
    "AccountName": string;
    "CallingNumber"?: string;
    "CalledNumber": string;
    "CustomerInfo"?: string;
}

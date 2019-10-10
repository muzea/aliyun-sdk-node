interface ModifyApiRequest {
    "RegionId"?: string;
    "ApiName": string;
    "Visibility": string;
    "RequestConfig": string;
    "ServiceConfig": string;
    "GroupId"?: string;
    "ResultType"?: string;
    "ResultSample"?: string;
    "ApiId": string;
    "Description"?: string;
    "AuthType"?: string;
    "RequestParameters"?: string;
    "SystemParameters"?: string;
    "ConstantParameters"?: string;
    "ServiceParameters"?: string;
    "ServiceParametersMap"?: string;
    "FailResultSample"?: string;
    "ErrorCodeSamples"?: string;
    "ResultDescriptions"?: string;
    "OpenIdConnectConfig"?: string;
    "AllowSignatureMethod"?: string;
    "WebSocketApiType"?: string;
    "ResultBodyModel"?: string;
    "ForceNonceCheck"?: boolean;
    "DisableInternet"?: boolean;
    "AppCodeAuthType"?: string;
}
export { ModifyApiRequest };
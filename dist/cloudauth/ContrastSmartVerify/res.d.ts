export interface ContrastSmartVerifyResponse {
    Code: string;
    Message: string;
    RequestId: string;
    ResultObject: {
        SubCode: string;
        CertifyId: string;
        VerifyInfo: string;
        RiskInfo: string;
        Passed: string;
    };
}

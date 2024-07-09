export interface VerifyBankElementResponse {
    Code: string;
    Message: string;
    RequestId: string;
    ResultObject: {
        CertifyId: string;
        SubCode: string;
        MaterialInfo: string;
        Passed: string;
    };
}

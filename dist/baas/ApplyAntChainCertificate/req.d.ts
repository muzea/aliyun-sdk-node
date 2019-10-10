interface ApplyAntChainCertificateRequest {
    /**
    * 地域ID
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 上传内容
    * @example `LS0tLS1...`
    */ "UploadReq": string;
    /**
    * 区块链ID
    * @example `bDXK6boZ`
    */ "AntChainId": string;
}
export { ApplyAntChainCertificateRequest };
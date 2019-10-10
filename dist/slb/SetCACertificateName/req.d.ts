interface SetCACertificateNameRequest {
    /**
    * CA证书的地域。
    * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * CA证书ID。
    * @example `139a00604ad-cn-east-hangzhou-01`
    */ "CACertificateId": string;
    /**
    * CA证书名称。
    * 名称长度为1~80个英文或中文字符，必须以大小字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。
    * @example `mycacert02`
    */ "CACertificateName": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
}
export { SetCACertificateNameRequest };
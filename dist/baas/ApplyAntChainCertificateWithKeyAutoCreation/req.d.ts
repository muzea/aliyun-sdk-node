interface ApplyAntChainCertificateWithKeyAutoCreationRequest {
    /**
    * 地域ID
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 联盟ID
    * @example `DV80nJXq`
    */ "ConsortiumId": string;
    /**
    * SSL密钥密码
    * @example `password`
    */ "Password": string;
    /**
    * 城市名（L）
    * @example `countryName`
    */ "CountryName": string;
    /**
    * 省名（ST）
    * @example `stateOrProvinceName`
    */ "StateOrProvinceName": string;
    /**
    * 国家名（C）
    * @example `localityName`
    */ "LocalityName": string;
    /**
    * 机构名（O）
    * @example `organizationName  `
    */ "OrganizationName": string;
    /**
    * 组织单位名（OU）
    * @example `organizationUnitName  `
    */ "OrganizationUnitName": string;
    /**
    * 通用名称（CN）
    * @example `commonName`
    */ "CommonName": string;
    /**
    * 区块链ID
    * @example `1q8B5R9p`
    */ "AntChainId": string;
}
export { ApplyAntChainCertificateWithKeyAutoCreationRequest };
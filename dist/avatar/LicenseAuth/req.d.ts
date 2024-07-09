export interface LicenseAuthRequest {
    /**
     * 租户ID，从虚拟数字人开放平台的对应业务配置的开发者信息中获取的TenantId
     * @example `9185`
     */
    "TenantId": number;
    /**
     * AppId，从虚拟数字人开放平台的对应业务配置的开发者信息中获取的AppId
     * @example `dsdsf1`
     */
    "AppId": string;
    /**
     * 后台绑定客户端包名信息后生成的license文件中的内容，可以从实例配置中去下载对应实例的license文件
     * @example `FqTyXFrIqbIGnb_oqIvszv1wffODnpCDNDvOc6xNXbAhak1AwsfrCo2cSrPFAhHEitOb9VEG`
     */
    "License": string;
}

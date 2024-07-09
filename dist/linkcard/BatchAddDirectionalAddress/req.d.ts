export interface BatchAddDirectionalAddressRequest {
    /**
     * 定向分组ID。
     * 您可调用接口[GetCardDetail](~~374328~~)在返回参数中查看定向分组ID（DirectionalGroupId）。
     * @example `5`
     */
    "GroupId": number;
    /**
     * 地址来源。
     * - **user_defined**：用户配置。
     * - **aliyun_defined**：阿里云预配。
     * @example `user_defined`
     */
    "Source": string;
    /**
     * 地址类型。
     * - **Ip**：IP地址。
     * - **Domain**：域名。
     * @example `Domain`
     */
    "AddressType": string;
    /**
     * 具体定向地址。
     */
    "ListAddress": string[];
}

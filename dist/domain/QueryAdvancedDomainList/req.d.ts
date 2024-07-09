export interface QueryAdvancedDomainListRequest {
    /**
     * 到期日期范围查询结束时间，UTC时间1970年1月1日0点距离现在的毫秒数。
     * @example `1522080000000`
     */
    "EndExpirationDate"?: number;
    /**
     * 用户IP。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 到期日期范围查询开始时间，UTC时间1970年1月1日0点距离现在的毫秒数。
     * @example `1522080000000`
     */
    "StartExpirationDate"?: number;
    /**
     * 域名类型。取值：
     * - **New gTLD**。
     * - **gTLD**。
     * - **ccTLD**。
     * - **other**。
     * @example `gTLD`
     */
    "ProductDomainType"?: string;
    /**
     * 分页页码，最小值为**0**。
     *
     * @example `1`
     */
    "PageNum": number;
    /**
     * 分页大小，最小值为**1**，最大值为**200**。
     *
     * @example `10`
     */
    "PageSize": number;
    /**
     * 域名分组ID。
     * @example `-1`
     */
    "DomainGroupId"?: number;
    /**
     * 排序字段，根据域名字典序排序。取值：
     * - **false**：降序。
     * - **true**：升序。
     * @example `false`
     */
    "DomainNameSort"?: boolean;
    /**
     * 域名状态。取值：
     * - **0**：全部。
     * - **1**：急需续费。
     * - **2**：急需赎回。
     * - **3**：正常。
     * - **4**：正在转出万网。
     * - **5**：域名持有者信息修改中。
     * - **6**：未实名认证。
     * - **7**：审核失败，重新实名认证。
     * - **8**：审核中。
     * @example `1`
     */
    "DomainStatus"?: number;
    /**
     * 域名长度范围查询结束长度。
     * @example `5`
     */
    "EndLength"?: number;
    /**
     * 排除关键字。
     * @example `test`
     */
    "Excluded"?: string;
    /**
     * 开头排除关键字。
     * @example `false`
     */
    "ExcludedPrefix"?: boolean;
    /**
     * 结束排除关键字。
     * @example `false`
     */
    "ExcludedSuffix"?: boolean;
    /**
     * 排序字段，根据到期日排序。取值：
     * - **false**：降序。
     * - **true**：升序。
     * @example `false`
     */
    "ExpirationDateSort"?: boolean;
    /**
     * 域名组成信息。
     * @example `1`
     */
    "Form"?: number;
    /**
     * 关键字。
     * @example `test`
     */
    "KeyWord"?: string;
    /**
     * 开头关键字。
     * @example `false`
     */
    "KeyWordPrefix"?: boolean;
    /**
     * 结束关键字。
     * @example `true`
     */
    "KeyWordSuffix"?: boolean;
    /**
     * 排序字段，根据域名类型排序。取值：
     * - **false**：降序。
     * - **true**：升序。
     * @example `false`
     */
    "ProductDomainTypeSort"?: boolean;
    /**
     * 排序字段，根据注册日排序。取值：
     * - **false**：降序。
     * - **true**：升序。
     *
     * @example `false`
     */
    "RegistrationDateSort"?: boolean;
    /**
     * 域名长度范围查询开始长度。
     * @example `5`
     */
    "StartLength"?: number;
    /**
     * 发布状态。取值：
     * -  **2**：已发布一口价。
     * - **13**：已发布议价。
     * - **4**：已发布竞价。
     * - **6**：已发布带价push。
     * - **-1**：未发布域名交易。
     * @example `-1`
     */
    "TradeType"?: number;
    /**
     * 查询后缀列表，以逗号“,”隔开。
     * @example `com.cn`
     */
    "Suffixs"?: string;
    /**
     * 注册日期范围查询开始时间，UTC时间1970年1月1日0点距离现在的毫秒数。
     * @example `1522080000000`
     */
    "StartRegistrationDate"?: number;
    /**
     * 注册日期范围查询结束时间，UTC时间1970年1月1日0点距离现在的毫秒数。
     * @example `1522080000000`
     */
    "EndRegistrationDate"?: number;
    /**
     * 资源组id。
     * @example `rg-acfmw6bpc6n7zai`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `数智`
         */
        Key: string;
        /**
         * 实例的标签值。
         * @example `废弃`
         */
        Value: string;
    }[];
}

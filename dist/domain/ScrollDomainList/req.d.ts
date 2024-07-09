export interface ScrollDomainListRequest {
    /**
     * 查询域名到期日期范围的结束时间，计算方式为UTC时间1970年1月1日0点距离现在的毫秒数。
     * @example `1541520000000`
     */
    "EndExpirationDate"?: number;
    /**
     * 用户IP，可设置为**127.0.0.1**。
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
     * 查询域名到期日期范围的开始时间，计算方式为UTC时间1970年1月1日0点距离现在的毫秒数。
     * @example `1541520000000`
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
     * 域名列表的分页大小。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * 域名分组ID，可通过[QueryDomainGroupList](https://help.aliyun.com/document_detail/69362.html)接口获取。
     * @example `123456`
     */
    "DomainGroupId"?: number;
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
     * @example `0`
     */
    "DomainStatus"?: number;
    /**
     * 查询域名长度范围的结束长度。
     * @example `3`
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
     * @example `true`
     */
    "ExcludedSuffix"?: boolean;
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
     * @example `true`
     */
    "KeyWordPrefix"?: boolean;
    /**
     * 结束关键字。
     * @example `false`
     */
    "KeyWordSuffix"?: boolean;
    /**
     * 查询域名长度范围的开始长度。
     * @example `0`
     */
    "StartLength"?: number;
    /**
     * 发布状态。取值：
     * - **2**：已发布一口价。
     * - **3**：已发布线上议价。
     * - **4**：已发布竞价。
     * - **6**：已发布带价push。
     * - **-1**：未发布域名交易。
     * @example `-1`
     */
    "TradeType"?: number;
    /**
     * 查询后缀列表，以逗号（,）隔开。
     * @example `com`
     */
    "Suffixs"?: string;
    /**
     * 查询域名注册日期范围的开始时间，计算方式为UTC时间1970年1月1日0点距离现在的毫秒数。
     * @example `1541520000000`
     */
    "StartRegistrationDate"?: number;
    /**
     * 查询域名注册日期范围的结束时间，计算方式为UTC时间1970年1月1日0点距离现在的毫秒数。
     * @example `1541520000000`
     */
    "EndRegistrationDate"?: number;
    /**
     * 翻页遍历ID（技术参数）。
     * @example `test`
     */
    "ScrollId"?: string;
    /**
     * 资源组id。
     * @example `rg-acfmw6bpc6n7zai`
     */
    "ResourceGroupId"?: string;
}

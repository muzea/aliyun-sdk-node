export interface QueryDomainListRequest {
    /**
     * 查询域名到期日期的结束时间，计算方式为UTC时间1970年1月1日0点距离需要查询时间的毫秒数，目前仅支持按天查询。
     * @example `1522080000000`
     */
    "EndExpirationDate"?: number;
    /**
     * 查询域名到期日期的开始时间，计算方式为UTC时间1970年1月1日0点距离需要查询时间的毫秒数，目前仅支持按天查询。
     * @example `1522080000000`
     */
    "StartExpirationDate"?: number;
    /**
     * 用户IP，可以设置为**127.0.0.1**。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认值为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 列表查询类型。取值：
     * - **1**：急需续费列表。
     * - **2**：急需赎回列表。
     *
     * @example `1`
     */
    "QueryType"?: string;
    /**
     * 查询域名注册日期的开始时间，计算方式为UTC时间1970年1月1日0点距离现在的毫秒数，目前仅支持按天查询。
     * @example `1522080000000`
     */
    "StartRegistrationDate"?: number;
    /**
     * 查询域名注册日期的结束时间，计算方式为UTC时间1970年1月1日0点距离现在的毫秒数，目前仅支持按天查询。
     * @example `1522080000000`
     */
    "EndRegistrationDate"?: number;
    /**
     * 域名，可在域名列表中搜索该域名。
     * @example `test.com`
     */
    "DomainName"?: string;
    /**
     * 业务内容（如注册时间、过期时间）的排序顺序。取值：
     * - **ASC**：升序。
     * - **DESC**：倒序。
     * > 不传此参数默认为**DESC**。
     * @example `ASC`
     */
    "OrderByType"?: string;
    /**
     * 排序字段。取值：
     * - **RegistrationDate**：根据注册时间排序。
     * - **ExpirationDate**：根据到期时间排序。
     * > 不传此参数时，默认以入库时间排序。
     * @example `RegistrationDate`
     */
    "OrderKeyType"?: string;
    /**
     * 域名类型。取值：
     * - **New gTLD**：新顶级域。
     * - **gTLD**：通用顶级域。
     * - **ccTLD**：国别域。
     *
     * @example `New gTLD`
     */
    "ProductDomainType"?: string;
    /**
     * 域名列表的分页页码。
     * @example `1`
     */
    "PageNum": number;
    /**
     * 域名列表的分页大小。
     * @example `10`
     */
    "PageSize": number;
    /**
     * <props="china">域名分组ID，可使用查询域名分组的[QueryDomainGroupList](~~69362~~)接口获取。</props>
     * <props="intl">域名分组ID。</props>
     * @example `123456`
     */
    "DomainGroupId"?: string;
    /**
     * 资源组id。
     * @example `rg-aek2indvyxgpfti`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `备注`
         */
        Key: string;
        /**
         * 标签值。
         * @example `标签1`
         */
        Value: string;
    }[];
    /**
     * 域名所有者名称。
     * @example `广州金烨再生资源回收有限公司`
     */
    "Ccompany"?: string;
}

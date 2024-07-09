export interface QueryAdvancedDomainListResponse {
    /**
     * 是否有上一页。
     * @example `false`
     */
    PrePage: boolean;
    /**
     * 当前页码。
     * @example `1`
     */
    CurrentPageNum: number;
    /**
     * 唯一请求识别码。
     * @example `D200000-C0B9-4CD3-B92A-9B44A000000`
     */
    RequestId: string;
    /**
     * 分页大小。
     * @example `2`
     */
    PageSize: number;
    /**
     * 总页数。
     * @example `275`
     */
    TotalPageNum: number;
    Data: {
        /**
         * 域名列表。
         */
        Domain: {
            /**
             * 域名实名认证状态。取值：
             * - **FAILED**：实名认证失败。
             * - **SUCCEED**：实名认证成功。
             * - **NONAUDIT**：未实名认证。
             * - **AUDITING**：审核中。
             * @example `SUCCEED`
             */
            DomainAuditStatus: string;
            /**
             * 域名分组编号。
             * @example `-1`
             */
            DomainGroupId: string;
            /**
             * 域名备注。
             * @example `备注`
             */
            Remark: string;
            /**
             * 域名分组名称。
             * @example `默认分组`
             */
            DomainGroupName: string;
            /**
             * 中文域名持有者。
             * @example `Tom`
             */
            ZhRegistrantOrganization: string;
            /**
             * 域名持有者。
             * @example `Tom`
             */
            RegistrantOrganization: string;
            /**
             * 注册时间。
             * @example `2018-04-09 17:07:03`
             */
            RegistrationDate: string;
            /**
             * 实例编号。
             * @example `S20182000000000`
             */
            InstanceId: string;
            /**
             * 域名。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 域名过期状态。取值：
             * - **1**：域名未过期。
             * - **2**：域名已过期。
             * @example `1`
             */
            ExpirationDateStatus: string;
            /**
             * 域名到期日。
             * @example `2019-04-09 17:07:03`
             */
            ExpirationDate: string;
            DnsList: {
                /**
                 * dns列表。
                 */
                Dns: string[];
            };
            /**
             * 邮箱。
             * @example `username@example.com`
             */
            Email: string;
            /**
             * 域名注册类型。取值：
             * - **1**：个人。
             * - **2**：企业。
             * @example `1`
             */
            RegistrantType: string;
            /**
             * 域名到期日，UTC时间1970年1月1日0点距离域名到期日的毫秒数。
             * @example `1554800823000`
             */
            ExpirationDateLong: number;
            /**
             * 到期日和当前日期差。
             * @example `356`
             */
            ExpirationCurrDateDiff: number;
            /**
             * 是否是溢价词。
             * @example `false`
             */
            Premium: boolean;
            /**
             * 注册时间，UTC时间1970年1月1日0点距离注册时间的毫秒数。
             * @example `1523264823000`
             */
            RegistrationDateLong: number;
            /**
             * 产品ID。
             * @example `2a`
             */
            ProductId: string;
            /**
             * 域名状态。取值：
             * - **1**：急需续费。
             * - **2**：急需赎回。
             * - **3**：正常。
             * - **4**：转出中。
             * - **5**：域名持有者信息修改中。
             * - **6**：未实名认证。
             * - **7**：实名认证失败。
             * - **8**：实名认证审核中。
             * @example `5`
             */
            DomainStatus: string;
            /**
             * 域名类型。取值：
             * - **New gTLD**。
             * -  **gTLD**。
             * - **ccTLD**。
             * @example `gTLD`
             */
            DomainType: string;
            /**
             * 资源组 ID。
             * @example `rg-aek2yyciz557g3q`
             */
            ResourceGroupId: string;
            Tag: {
                /**
                 * 标签。
                 */
                Tag: {
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
            };
        }[];
    };
    /**
     * 记录总数。
     * @example `549`
     */
    TotalItemNum: number;
    /**
     * 是否有下一页。
     * @example `true`
     */
    NextPage: boolean;
}

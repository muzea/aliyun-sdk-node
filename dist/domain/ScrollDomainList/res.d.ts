export interface ScrollDomainListResponse {
    /**
     * 唯一请求识别码。
     * @example `722AB7F5-61F0-408C-A012-4784AFD34083`
     */
    RequestId: string;
    /**
     * 分页大小。
     * @example `50`
     */
    PageSize: number;
    /**
     * 翻页遍历ID。
     * @example `test`
     */
    ScrollId: string;
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
             * @example `NONAUDIT`
             */
            DomainAuditStatus: string;
            /**
             * 域名分组编号。
             * @example `1234`
             */
            DomainGroupId: string;
            /**
             * 域名备注。
             * @example `测试域名`
             */
            Remark: string;
            /**
             * 域名分组名称。
             * @example `测试分组`
             */
            DomainGroupName: string;
            /**
             * 中文域名持有者。
             * @example `阿里云`
             */
            ZhRegistrantOrganization: string;
            /**
             * 域名持有者。
             * @example `alibaba cloud`
             */
            RegistrantOrganization: string;
            /**
             * 注册时间。
             * @example `2017-02-15 00:00:00`
             */
            RegistrationDate: string;
            /**
             * 域名实例编号。
             * @example `S1234`
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
             * @example `2019-02-15 17:30:35`
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
             * @example `1550223035000`
             */
            ExpirationDateLong: number;
            /**
             * 到期日和当前日期差。
             * @example `10`
             */
            ExpirationCurrDateDiff: number;
            /**
             * 是否是溢价词。
             * @example `false`
             */
            Premium: boolean;
            /**
             * 域名注册时间，计算方式为UTC时间1970年1月1日0点距离注册时间的毫秒数。
             * @example `1487088000000`
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
             * @example `3`
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
             * 资源组id。
             * @example `rg-aek2yyciz557g3q`
             */
            ResourceGroupId: string;
            Tag: {
                /**
                 * 资源标签。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * @example `testKey`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `testValue`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
    /**
     * 剩余总数。
     * @example `200`
     */
    TotalItemNum: number;
}

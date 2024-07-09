export interface QueryDomainListResponse {
    /**
     * 是否有上一页。
     * @example `false`
     */
    PrePage: boolean;
    /**
     * 当前域名列表的分页页码。
     * @example `0`
     */
    CurrentPageNum: number;
    /**
     * 唯一请求识别码。
     * @example `B7AB5469-5E38-4AA9-A920-C65B7A9C8E6E`
     */
    RequestId: string;
    /**
     * 域名分页列表的大小。
     * @example `5`
     */
    PageSize: number;
    /**
     * 域名列表的总页数。
     * @example `1`
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
             *
             * @example `FAILED`
             */
            DomainAuditStatus: string;
            /**
             * 域名分组编号。
             * @example `123456`
             */
            DomainGroupId: string;
            /**
             * 域名备注。
             * @example `测试备注`
             */
            Remark: string;
            /**
             * 域名分组名称
             * @example `测试分组`
             */
            DomainGroupName: string;
            /**
             * 注册时间。
             * @example `2017-11-02 04:00:45`
             */
            RegistrationDate: string;
            /**
             * 实例编号。
             * @example `ST20151102120031118`
             */
            InstanceId: string;
            /**
             * 域名。
             * @example `test.com`
             */
            DomainName: string;
            /**
             * 域名过期状态。取值：
             * - **1**：域名未过期。
             * - **2**：域名已过期。
             *
             * @example `1`
             */
            ExpirationDateStatus: string;
            /**
             * 域名到期日期。
             * @example `2017-11-02 04:00:45`
             */
            ExpirationDate: string;
            /**
             * 域名注册类型。取值：
             * - **1**：个人。
             * - **2**：企业。
             *
             * @example `1`
             */
            RegistrantType: string;
            /**
             * 域名到期时长，UTC时间1970年1月1日0点距离域名到期日的毫秒数。
             * @example `1522080000000`
             */
            ExpirationDateLong: number;
            /**
             * 域名到期日和当前的时间的天数差值。
             * @example `-30`
             */
            ExpirationCurrDateDiff: number;
            /**
             * 是否是溢价域名。
             * @example `true`
             */
            Premium: boolean;
            /**
             * 注册时长，UTC时间1970年1月1日0点距离注册时间的毫秒数。
             * @example `1522080000000`
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
             *
             * @example `3`
             */
            DomainStatus: string;
            /**
             * 域名类型。取值：
             * - **New gTLD**。
             * - **gTLD**。
             * - **ccTLD**。
             * @example `gTLD`
             */
            DomainType: string;
            /**
             * 域名资源组id。
             * @example `rg-aek2yyciz557g3q`
             */
            ResourceGroupId: string;
            Tag: {
                /**
                 * 域名标签列表。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * @example `费用`
                     */
                    Key: string;
                    /**
                     * 标签的值。
                     * @example `标签1`
                     */
                    Value: string;
                }[];
            };
            /**
             * 域名所有者名称。
             * @example `广州森林广告装饰有限公司`
             */
            Ccompany: string;
        }[];
    };
    /**
     * 域名总数。
     * @example `1`
     */
    TotalItemNum: number;
    /**
     * 是否有下一页。
     * @example `false`
     */
    NextPage: boolean;
}

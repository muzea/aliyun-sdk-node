export interface LookupTmchNoticeResponse {
    Claims: {
        /**
         * 商标信息列表。
         */
        Claim: {
            /**
             * 商标产品及服务信息。
             * @example `Class 9: Calculators; bags, coverings,containers, carriers and holders for mobile phones, personal handheld computers and notebooks; headphones; speakers; blank storage media;batteries. Class 16: Paper`
             */
            GoodsAndServices: string;
            Contacts: {
                /**
                 * 商标联系人列表。
                 */
                Contact: {
                    /**
                     * 类型。
                     * @example `agent`
                     */
                    Type: string;
                    /**
                     * 电话。
                     * @example `1390000****`
                     */
                    Voice: string;
                    /**
                     * 电子邮件。
                     * @example `username@example.com`
                     */
                    Email: string;
                    /**
                     * 传真。
                     * @example `4472335**8`
                     */
                    Fax: string;
                    /**
                     * 地址。
                     */
                    Addr: {
                        /**
                         * 国家。
                         * @example `NZ`
                         */
                        Cc: string;
                        /**
                         * 省。
                         * @example `Auckland`
                         */
                        Sp: string;
                        /**
                         * 邮编。
                         * @example `1010`
                         */
                        Pc: string;
                        /**
                         * 市。
                         * @example `Auckland`
                         */
                        City: string;
                        Street: {
                            Street: string[];
                        };
                    };
                    /**
                     * 组织。
                     * @example `Tom`
                     */
                    Org: string;
                    /**
                     * 姓名。
                     * @example `Tom`
                     */
                    Name: string;
                }[];
            };
            /**
             * 商标名称。
             * @example `POTED`
             */
            MarkName: string;
            ClassDescs: {
                /**
                 * 类型描述。
                 */
                ClassDesc: {
                    /**
                     * 类型编号。
                     * @example `18`
                     */
                    ClassNum: number;
                    /**
                     * 描述。
                     * @example `New Zealand`
                     */
                    Desc: string;
                }[];
            };
            Holders: {
                /**
                 * 商标持有者信息。
                 */
                Holder: {
                    /**
                     * 持有者名称。
                     * @example `owner`
                     */
                    Entitlement: string;
                    /**
                     * 地址。
                     */
                    Addr: {
                        /**
                         * 国家。
                         * @example `NZ`
                         */
                        Cc: string;
                        /**
                         * 省。
                         * @example `Wellington`
                         */
                        Sp: string;
                        /**
                         * 邮编。
                         * @example `6011`
                         */
                        Pc: string;
                        /**
                         * 市。
                         * @example `Wellington`
                         */
                        City: string;
                        Street: {
                            Street: string[];
                        };
                    };
                    /**
                     * 组织。
                     * @example `Whitcoulls 2011 Limited`
                     */
                    Org: string;
                }[];
            };
            /**
             * 法律信息。
             */
            JurDesc: {
                /**
                 * 所在地。
                 * @example `NZ`
                 */
                JurCC: string;
                /**
                 * 描述。
                 * @example `New Zealand`
                 */
                Desc: string;
            };
        }[];
    };
    /**
     * 唯一请求识别码。
     * @example `01C10C8E-0468-468C-BCD9-E709BDD0AE8F`
     */
    RequestId: string;
    /**
     * 商标标签。
     * @example `noted`
     */
    Label: string;
    /**
     * tmch的通知ID。
     * @example `586608000000`
     */
    Id: number;
    /**
     * 商标通知开始时间。
     * @example `2018-10-13T00:00:00.0Z`
     */
    NotBefore: string;
    /**
     * 商标通知结束时间。
     * @example `2018-10-15T00:00:00.0Z`
     */
    NotAfter: string;
}

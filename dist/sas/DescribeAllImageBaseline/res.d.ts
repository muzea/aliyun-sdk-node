export interface DescribeAllImageBaselineResponse {
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `1A975D03-5F49-5354-B2CB-3918D5DA****`
     */
    RequestId: string;
    /**
     * 镜像基线检查列表详情。
     */
    ImageBaselines: {
        /**
         * 基线分类列表。
         */
        BaselineClassList: {
            /**
             * 基线分类的类型key。
             * @example `identification`
             */
            ClassKey: string;
            /**
             * 基线分类的别名。
             * @example `身份鉴别`
             */
            Alias: string;
            /**
             * 基线主项列表。
             */
            BaselineNameList: {
                /**
                 * 基线主项的名称key。
                 * @example `identification`
                 */
                NameKey: string;
                /**
                 * 基线主项的类型key。
                 * @example `identification`
                 */
                ClassKey: string;
                /**
                 * 基线主项的别名。
                 * @example `身份鉴别`
                 */
                Alias: string;
                /**
                 * 基线子项列表。
                 */
                BaselineItemList: {
                    /**
                     * 基线主项的名称key。
                     * @example `identification`
                     */
                    NameKey: string;
                    /**
                     * 基线子项的名称key。
                     * @example `duplicate_pwd_hash`
                     */
                    ItemKey: string;
                    /**
                     * 基线主项的类型key。
                     * @example `identification`
                     */
                    ClassKey: string;
                    /**
                     * 基线子项的别名。
                     * @example `确保不存在相同密码Hash的账户`
                     */
                    Alias: string;
                }[];
            }[];
        }[];
    };
}

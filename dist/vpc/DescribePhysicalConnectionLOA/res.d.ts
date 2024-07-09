export interface DescribePhysicalConnectionLOAResponse {
    /**
     * 请求ID。
     * @example `318BB676-0A2B-43A0-9AD8-F1D34E93750F`
     */
    RequestId: string;
    /**
     * 物理专线LOA信息。
     */
    PhysicalConnectionLOAType: {
        /**
         * LOA的状态。取值：
         * - **Applying**：LOA申请中。
         * - **Accept**：LOA申请通过。
         * - **Available**：LOA可用。
         * - **Rejected**：LOA申请驳回。
         * - **Completing**：专线施工中。
         * - **Complete**：专线施工完成。
         * - **Deleted**：LOA已删除。
         * @example `Available`
         */
        Status: string;
        /**
         * 机房楼内线缆标签。
         * @example `bbb222`
         */
        LineLabel: string;
        /**
         * 运营商线路编码。
         * @example `aaa111`
         */
        LineCode: string;
        /**
         * 施工进场时间。
         * @example `2019-02-26T08:00:00Z`
         */
        ConstructionTime: string;
        /**
         * 入场施工单位。
         * @example `ctcu`
         */
        SI: string;
        /**
         * LOA文件下载地址。
         * @example `http://******`
         */
        LoaUrl: string;
        /**
         * 施工单位名称。
         * @example `company`
         */
        CompanyLocalizedName: string;
        /**
         * 物理专线实例ID。
         * @example `pc-bp1ca4wca27****`
         */
        InstanceId: string;
        /**
         * 物理专线类型。取值：
         * - **MSTP**
         * - **MPLSVPN**
         * - **FIBRE**
         * - **Other**
         * @example `FIBRE`
         */
        LineType: string;
        /**
         * 需要部署物理专线的单位名称。
         * @example `test1234`
         */
        CompanyName: string;
        PMInfo: {
            /**
             * 施工人员信息。
             */
            PMInfo: {
                /**
                 * 施工人员性别。取值：
                 * -  **Male**：男。
                 * - **Female**：女。
                 * @example `Male`
                 */
                PMGender: string;
                /**
                 * 施工人员证件号码。
                 * @example `12345671****`
                 */
                PMCertificateNo: string;
                /**
                 * 施工人员姓名。
                 * @example `name`
                 */
                PMName: string;
                /**
                 * 施工人员证件类型。取值：
                 * - **IDCard**：身份证。
                 * - **Passport**：护照。
                 * - **Other**：其他。
                 * @example `Other`
                 */
                PMCertificateType: string;
                /**
                 * 施工人员联系电话。
                 * @example `18910010****`
                 */
                PMContactInfo: string;
            }[];
        };
        /**
         * 运营商主体。取值：
         * - **中国电信**。
         * - **中国联通**。
         * - **中国移动**。
         * - **中国其他**。
         * @example `中国其他`
         */
        LineServiceProvider: string;
        /**
         * 线路运维联系方式。
         * @example `1388888****`
         */
        LineSPContactInfo: string;
    };
}

export interface MemberAccountDetailPageQueryRequest {
    /**
     * 请求参数
     */
    "body"?: {
        /**
         * 加密商家ID
         * @example `750cff00c3e0996d220ac2861dafdfadsf`
         */
        OpenMerchantId: string;
        /**
         * 平台类型
         * @example `如：FENGXUAN`
         */
        PlatFormType: string;
        /**
         * 商家会员ID
         * @example `WMS_36606164948078_23218019`
         */
        OuterMemberId: string;
        /**
         * 账号类型（20-积分；30-成长值）
         * @example `20
        `
         */
        AccountType: number;
        /**
         * 查询起始时间：2011-09-01 00:00:00
         * @example `2011-09-01 00:00:00
        
        `
         */
        StartTime: string;
        /**
         * 查询结束时间：2011-11-30 23:59:59
         * @example `2011-09-02 00:00:00
        
        `
         */
        EndTime: string;
        /**
         * 分页页码
         * @example `1`
         */
        Page: number;
        /**
         * 每页数量，默认10，最大1000
         * @example `10`
         */
        PageSize: number;
    };
}

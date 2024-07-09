export interface DescribeIMVInfosResponse {
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `gp-xxxxxxxxx`
     */
    DBInstanceId: string;
    /**
     * 视图关系信息的对象数组
     */
    ImvInfos: {
        /**
         * 试图名称。
         * @example `public."mv1"`
         */
        MV: string;
        /**
         * 物化视图依赖的表名。
         * @example `"public."t2"`
         */
        Base: string;
        /**
         * 描述mv与base 的依赖关系和各个指标的统计值，用于构造血缘关系图数据。
         * @example `{\"maintenance_calls\" : 1, \"avg_apply_time\" : 2, \"avg_calc_rows\" : 1, \"avg_calc_time\" : 11, \"avg_delta_rows\" : 1, \"avg_maintenance_total_time\" : 14, \"avg_maintenance_total_time_total\" : 14, \"max_apply_time\" : 2, \"max_calc_rows\" : 1, \"max_calc_time\" : 11, \"max_delta_rows\" : 1, \"max_maintenance_total_time\" : 14, \"max_maintenance_total_time_total\" : 14, \"min_apply_time\" : 2, \"min_calc_rows\" : 1, \"min_calc_time\" : 11, \"min_delta_rows\" : 1, \"min_maintenance_total_time\" : 14, \"min_maintenance_total_time_total\" : 14, \"max_outerjoin_apply_time\" : null, \"max_outerjoin_calc_rows\" : null, \"max_outerjoin_calc_time\" : null, \"max_outerjoin_delta_rows\" : null, \"avg_outerjoin_apply_time\" : null, \"avg_outerjoin_calc_rows\" : null, \"avg_outerjoin_calc_time\" : null, \"avg_outerjoin_delta_rows\" : null, \"min_outerjoin_apply_time\" : null, \"min_outerjoin_calc_rows\" : null, \"min_outerjoin_calc_time\" : null, \"min_outerjoin_delta_rows\" : null, \"create_rows\" : null, \"create_time\" : null, \"direct_visited\" : null, \"indirect_visited\" : null, \"max_refresh_rows\" : null, \"max_refresh_time\" : null, \"avg_refresh_rows\" : null, \"avg_refresh_time\" : null, \"min_refresh_rows\" : null, \"min_refresh_time\" : null, \"refresh_calls\" : null, \"avg_wait_lock_time\" : null, \"max_wait_lock_time\" : null, \"min_wait_lock_time\" : null, \"latest_maintenance_time\" : \"2023-08-09T07:39:14.753252+00:00\"}`
         */
        DetailInfo: string;
    }[];
}

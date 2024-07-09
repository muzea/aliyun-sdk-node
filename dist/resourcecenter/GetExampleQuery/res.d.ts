export interface GetExampleQueryResponse {
    /**
     * 请求ID。
     * @example `36A3D9BE-B607-5993-B546-7E19EF65DC00`
     */
    RequestId: string;
    /**
     * 系统模板信息。
     */
    ExampleQuery: {
        /**
         * 模板ID。
         * @example `sq-0PfKy****`
         */
        QueryId: string;
        /**
         * 模板表达式。
         * @example `SELECT
          resource_id,
          resource_name,
          region_id,
          zone_id,
          resource_type,
          account_id,
          create_time,
          resource_group_id,
          tags,
          ip_addresses,
          vpc_id,
          v_switch_id
        FROM
          resources
        ORDER BY
          resource_type,
          resource_id
        LIMIT
          1000 OFFSET 0;`
         */
        Expression: string;
        /**
         * 模板名称。
         * @example `列出所有阿里云资源`
         */
        Name: string;
        /**
         * 模板描述。
         * @example `返回所有有权限的资源，并按照资源类型和资源ID排列。`
         */
        Description: string;
    };
}

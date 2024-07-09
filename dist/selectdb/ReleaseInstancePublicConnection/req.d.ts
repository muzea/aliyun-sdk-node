export interface ReleaseInstancePublicConnectionRequest {
    /**
     * 实例的连接址。
     * @example `selectdb-cn-7213c8y****-public.selectdbfe.pre.rds.aliyuncs.com`
     */
    "ConnectionString": string;
    /**
     * 实例ID。
     * @example `selectdb-cn-7213cjv****`
     */
    "DBInstanceId": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}

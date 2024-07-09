export interface DescribeRoleZoneInfoResponse {
    /**
     * 请求ID。
     * @example `224B97FB-A275-4EAC-86E9-8922FEA2****`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页可展示的记录数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `2`
     */
    TotalCount: number;
    Node: {
        /**
         * Redis实例中各节点的详细信息。
         */
        NodeInfo: {
            /**
             * 节点默认的默认带宽，单位为MB/s。
             * @example `96`
             */
            DefaultBandWidth: number;
            /**
             * 节点当前的小版本。
             * @example `redis-5.0_0.3.10`
             */
            CurrentMinorVersion: string;
            /**
             * 节点当前的带宽，单位为MB/s，由节点的默认带宽和增加的带宽组成。
             * > * 您可以调用[EnableAdditionalBandwidth](~~206173~~)接口设置要增加的带宽。
             * > * 通过本参数也可推算出增加的带宽大小，例如节点默认带宽为96 MB/s，本参数返回值为100，则增加了4 MB/s的带宽。
             * @example `100`
             */
            CurrentBandWidth: number;
            /**
             * 是否为只读节点，如果为只读节点，本参数返回值为**3**。
             * > 如果不是只读节点，不返回本参数。
             * @example `3`
             */
            InsType: number;
            /**
             * 是否为最新的小版本，返回值：
             * * **0**：不是最新版本。
             * * **1**：是最新版本。
             * > 如需升级小版本，请调用[ModifyInstanceMinorVersion](~~129381~~)接口。
             * @example `1`
             */
            IsLatestVersion: number;
            /**
             * 节点ID。
             * @example `r-t4nlenc2p04uvb****`
             */
            InsName: string;
            /**
             * 节点类型，返回值：
             * * **db**：数据节点。
             * * **proxy**：代理节点。
             * * **normal**：普通节点（标准架构的实例会返回该值）。
             * @example `normal`
             */
            NodeType: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-b`
             */
            ZoneId: string;
            /**
             * 该节点是否增加了带宽，取值：
             * * **true**：未增加带宽。
             * * **false**：已增加带宽。
             * @example `true`
             */
            IsOpenBandWidthService: boolean;
            /**
             * 数据分片节点ID。
             * @example `30381****`
             */
            CustinsId: string;
            /**
             * 节点角色，返回值：
             * * **master**：主节点。
             * * **slave**：从节点。
             * @example `master`
             */
            Role: string;
            /**
             * 本参数仅作为Redis实例内部维护使用。
             * @example `10065****`
             */
            NodeId: string;
        }[];
    };
}

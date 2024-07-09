export interface ModifyParameterRequest {
    /**
     * 集群ID。
     * @example `cds-bp1l5ys6****wzr5`
     */
    "ClusterId": string;
    /**
     * 参数名。
     * @example `cas_contention_timeout_in_ms`
     */
    "Name": string;
    /**
     * 参数值。
     * @example `2000`
     */
    "Value": string;
}

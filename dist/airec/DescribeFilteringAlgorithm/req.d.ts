export interface DescribeFilteringAlgorithmRequest {
    /**
     * 实例ID。
     * @example `airec-cn-****`
     */
    "instanceId": string;
    /**
     * 指定的召回表ID。
     * @example `abc`
     */
    "algorithmId": string;
}

export interface DescribeSagVbrRelationsResponse {
    /**
     * 请求ID。
     * @example `17D79124-104A-42DB-8FCA-CE2957CD1723`
     */
    RequestId: string;
    /**
     * 绑定信息。
     */
    SagVbrRelations: {
        /**
         * 边界路由器实例ID。
         * @example `vbr-bp15ihkk93ezxppk****`
         */
        VbrInstanceId: string;
        /**
         * 智能接入网关实例所属阿里云账号（主账号）ID。
         * @example `16884015121212****`
         */
        SagUid: string;
        /**
         * 智能接入网关实例ID。
         * @example `sag-0nnteglltw6z4b****`
         */
        SagInstanceId: string;
    }[];
}

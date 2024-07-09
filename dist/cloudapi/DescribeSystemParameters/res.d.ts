export interface DescribeSystemParametersResponse {
    /**
     * 请求ID
     * @example `0CCDF65E-6050-412D-AD68-FA3D9196836C`
     */
    RequestId: string;
    SystemParams: {
        /**
         * 由 SystemParam 组成的数组格式，返回系统参数信息
         */
        SystemParamItem: {
            /**
             * 示例
             * @example `192.168.1.1`
             */
            DemoValue: string;
            /**
             * 参数描述
             * @example `客户端IP`
             */
            Description: string;
            /**
             * 参数名称
             * @example `CaClientIp`
             */
            ParamName: string;
            /**
             * 参数类型
             * @example `string`
             */
            ParamType: string;
        }[];
    };
}

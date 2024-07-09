export interface CreateRpcServiceRequest {
    /**
     * iovcc的项目工程ID。
     * @example `ftewtwyy`
     */
    "ProjectId": string;
    /**
     * iovcc cmns应用appKey，应用唯一标识。
     * @example `WH2MptXX`
     */
    "AppKey": string;
    /**
     * 服务接口名称。
     * http接口为不包含参数的请求地址。例如：`https://www.aliyun.com/rpcServiceTest`。
     * @example `http://www.aliyun.com/aicc/testRpc`
     */
    "InterfaceName": string;
    /**
     * 接口调用类型。
     * 支持http（含https）和hsf。其中，hsf接口需与iovcc服务部署在同一vpc内，方能支持。
     * @example `http`
     */
    "InvokeType": string;
    /**
     * - 调用为http方式时，参数key以英文逗号隔开。例如：`param1,param2`。
     * - 调用为hsf方式时，参数类型以英文逗号隔开。参数基本类型仅支持string，int，long，bytes，double，float，bool7种。例如：`string,int,long`。
     * @example `param1,param2`
     */
    "Params": string;
    /**
     * 服务端接口分组名称。
     * @example `rpcTestGroup`
     */
    "GroupName"?: string;
    /**
     * 接口调用方法名称，由字母、数字和下划线(_)组成。
     * - 调用类型为**http**时，名称为服务方自定义。
     * - 调用类型为**hsf**时，名称为hsf接口方法名称。
     * @example `testMethodName`
     */
    "MethodName": string;
    /**
     * 接口版本号，由服务方自定义设置。
     * @example `1.0`
     */
    "VersionCode"?: string;
}

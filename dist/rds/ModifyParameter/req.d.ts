interface ModifyParameterRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 参数及其值的JSON串，参数的值都是字符串类型。格式：{"参数名称1":"参数值1","参数名称2":"参数值2"...}
    * @example `{"delayed_insert_timeout":"600","max_length_for_sort_data":"2048"}`
    */ "Parameters"?: string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
    * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
    */ "ClientToken"?: string;
    /**
    * 修改参数是否重启数据库，取值：
    * * **true**：强制重启（若修改的参数当中，有需要重启的参数，则必须传入true，否则修改将不生效）。
    * * **false**：不强制重启。
    * 默认值：**false**。
    * @example `false`
    */ "Forcerestart"?: boolean;
    "ParameterGroupId"?: string;
}
export { ModifyParameterRequest };
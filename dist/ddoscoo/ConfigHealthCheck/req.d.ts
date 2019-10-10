interface ConfigHealthCheckRequest {
    /**
    * @example `cn`
    */ "RegionId"?: string;
    /**
    * 转发协议，取值：
    * - **TCP**（四层）
    * - **UDP**（四层）
    * -  **HTTP**（七层）
    * @example `tcp`
    */ "ForwardProtocol": string;
    /**
    * 前端端口。
    * @example `233`
    */ "FrontendPort": number;
    /**
    * 传入HealthCheck对象JSON串，具体结构描述如下：
    * - **Type**，String类型，必选，协议类型。取值：**TCP**（四层）、**HTTP**（七层）。
    * - **Domain**，String类型，可选，健康检查/七层健康检查/域名。
    * - **Uri**，String类型，可选，健康检查/七层健康检查/检查路径。
    * - **Timeout**，Integer类型，可选，健康检查/四层健康检查/响应超时时间。
    * - **Port**，Integer类型，可选，健康检查/四层健康检查/检查端口。
    * - **Interval**，Integer类型，可选，健康检查/四层健康检查/检查间隔。
    * - **Up**，Integer类型，可选，健康检查/四层健康检查/健康阈值。
    * - **Down**，Integer类型，可选，健康检查/四层健康检查/不健康阈值。
    * @example `{"Type":"tcp","Timeout":10,"Port":80,"Interval":10,"Up":10,"Down":40}"}`
    */ "HealthCheck": string;
    "SourceIp"?: string;
    /**
    * 要操作的实例ID。
    * @example `ddoscoo-cn-XXXXXX`
    */ "InstanceId": string;
}
export { ConfigHealthCheckRequest };
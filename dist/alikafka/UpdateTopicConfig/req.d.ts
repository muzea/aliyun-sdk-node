export interface UpdateTopicConfigRequest {
    /**
     * 实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `alikafka_post-cn-v0h1fgs2****`
     */
    "InstanceId": string;
    /**
     * Topic名称。
     * @example `dqc_test2`
     */
    "Topic": string;
    /**
     * Topic配置字的key。
     * - 目前V2实例仅支持Local存储引擎的Topic，云存储引擎的Topic不支持修改。
     * - 支持V3实例修改Topic配置。
     * - V2实例的`local topic`支持的key为retention.ms、retention.bytes、replications。
     * - V3实例支持的key为retention.hours、max.message.bytes。
     * @example `replications`
     */
    "Config": string;
    /**
     * Topic配置字的value。其中V3实例支持的配置如下：
     * - `retention.hours`表示消息保留时长，取值类型为String，取值限制为24~8760。
     * - `max.message.bytes`表示发送消息最大大小，取值类型为String，取值限制为1048576~10485760。
     * @example `3`
     */
    "Value": string;
}

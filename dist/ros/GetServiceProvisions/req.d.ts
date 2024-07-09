export interface GetServiceProvisionsRequest {
    /**
     * 地域ID。
     * 您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 模板主体的结构。长度为1~524,288个字节。如果长度较长，则建议通过HTTP POST+Body Param的方式，将参数放在请求体中进行传递，避免因URL过长而导致请求失败。
     * > 您必须且仅能指定TemplateBody、TemplateURL、TemplateId或TemplateScratchId其中一个参数。
     * @example `ROSTemplateFormatVersion: '2015-09-01'\r\nResources:\r\n  Vpc:\r\n    Type: ALIYUN::ECS::VPC\r\n    Properties:\r\n      CidrBlock: 192.168.0.0/24\r\n      VpcName: TestVpc`
     */
    "TemplateBody"?: string;
    /**
     * 包含模板主体的文件的位置。URL必须指向位于HTTP Web服务器（HTTP或HTTPS）或阿里云OSS存储空间中的模板（1~524,288个字节）。OSS存储空间的URL，例如oss://ros/template/demo或oss://ros/template/demo?RegionId=cn-hangzhou。如未指定OSS地域，默认与接口参数RegionId相同。
     * 您必须且仅能指定TemplateBody、TemplateURL、TemplateId或Services其中一个参数。
     * @example `oss://ros-template/demo`
     */
    "TemplateURL"?: string;
    /**
     * 模板ID。支持共享模板和私有模板。
     * 您必须且仅能指定TemplateBody、TemplateURL、TemplateId或Services其中一个参数。
     * @example `5ecd1e10-b0e9-4389-a565-e4c15efc****`
     */
    "TemplateId"?: string;
    /**
     * 模板版本。如果不指定，默认取最新版本。
     * TemplateVersion仅在指定TemplateId时生效。
     * @example `v1`
     */
    "TemplateVersion"?: string;
    /**
     * 参数。
     */
    "Parameters"?: {
        /**
         * 参数的名称。如果未指定参数的名称和值，则ROS将使用模板中指定的默认值。
         * > Parameters为可选参数。若指定了Parameters，则ParameterKey为必选参数。
         * @example `Amount`
         */
        ParameterKey: string;
        /**
         * 参数的值。
         * > Parameters为可选参数。若指定了Parameters，则ParameterValue为必选参数。
         * @example `12`
         */
        ParameterValue: string;
    }[];
    /**
     * 云服务列表。
     */
    "Services"?: {
        /**
         * 云服务名称。取值：
         * - AHAS：应用高可用服务。
         * - ARMS：应用实时监控服务。
         * - ApiGateway：API网关。
         * - BatchCompute：批量计算。
         * - BrainIndustrial：工业大脑。
         * - CloudStorageGateway：云存储网关。
         * - CMS：云监控。
         * - CR：镜像容器服务。
         * - CS：容器服务。
         * - DCDN：全站加速。
         * - DataHub：数据总线。
         * - DataWorks：数据工场。
         * - EDAS：企业级分布式应用服务。
         * - EHPC：弹性高性能计算。
         * - EMAS：移动研发平台。
         * - FC：函数计算。
         * - FNF：Serverless工作流。
         * - MaxCompute：大数据计算服务。
         * - MNS：消息服务。
         * - HBR：云备份。
         * - IMM：智能媒体管理。
         * - IOT：物联网平台。
         * - KMS：密钥管理服务。
         * - NAS：文件存储。
         * - NLP：自然语言处理。
         * - OSS：对象存储服务。
         * - OTS：表格存储。
         * - PrivateLink：私网连接。
         * - PrivateZone：云解析。
         * - RocketMQ：消息队列RocketMQ版。
         * - SAE：应用引擎。
         * - SLS：日志服务。
         * - TrafficMirror：流量镜像。
         * - VS：视频监控。
         * - Xtrace：链路追踪。
         * @example `EHPC`
         */
        ServiceName: string;
    }[];
}

interface CDN {
    /**
    * 调用ListFCTrigger获取指定事件的函数计算触发器列表。
    */ ListFCTrigger(query: {
        "RegionId"?: string;
        /**
        * 事件名称。
        * @example `LogFileCreated`
        */ "EventMetaName": string;
        /**
        * 事件版本。
        * @example `1.0.0`
        */ "EventMetaVersion": string;
        "OwnerId"?: number;
    }): Promise<{
        "FCTriggers": {
            "Notes": string;
            "SourceArn": string;
            "EventMetaVersion": string;
            "EventMetaName": string;
            "RoleARN": string;
            "TriggerARN": string;
        }[];
        "RequestId": string;
    }>;
    /**
    * 调用ModifyCdnDomain修改加速域名。
    */ ModifyCdnDomain(query: {
        "RegionId"?: string;
        /**
        * 接入CDN的域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 回源地址列表。
        * @example `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80,"weight":"15"}]`
        */ "Sources"?: string;
        /**
        * 资源组ID。
        * @example `abcdabcd`
        */ "ResourceGroupId"?: string;
        /**
        * 顶级接入域，只有白名单用户CDN_TOP_LEVEL_DOMAIN_GREY_USER_LIST设置才有效。
        * @example `your.top.domain.com`
        */ "TopLevelDomain"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDomainRealtimeLogDelivery查询域名实时日志投递信息。
    */ DescribeDomainRealtimeLogDelivery(query: {
        "RegionId"?: string;
        /**
        * 开启实时日志投递服务域名。
        * @example `example.com`
        */ "Domain": string;
        "OwnerId"?: number;
    }): Promise<{
        "Project": string;
        "Logstore": string;
        "Region": string;
        "Status": string;
        "RequestId": string;
    }>;
    /**
    * 调用StartCdnDomain启用状态为停用的加速域名，将 DomainStatus变更为Online。
    */ StartCdnDomain(query: {
        "RegionId"?: string;
        /**
        * 需要接入CDN的域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteCdnDomain删除已添加的加速域名。
    */ DeleteCdnDomain(query: {
        "RegionId"?: string;
        /**
        * 要删除的CDN的域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 资源组ID。
        * @example `your resourceGroupId`
        */ "ResourceGroupId"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDomainsBySource查询用户名下，源站对应的所有域名名称列表。不支持模糊匹配。
    */ DescribeDomainsBySource(query: {
        "RegionId"?: string;
        /**
        * 源站，多个源站用逗号（,）隔开。
        * @example `aaa.source.com`
        */ "Sources": string;
        "OwnerId"?: number;
    }): Promise<{
        "DomainsList": {
            "DomainsData": {
                "Source": string;
                "Domains": {
                    "domainNames": string[];
                };
                "DomainInfos": {
                    "domainInfo": {
                        "DomainCname": string;
                        "Status": string;
                        "CreateTime": string;
                        "UpdateTime": string;
                        "DomainName": string;
                    }[];
                };
            }[];
        };
        "RequestId": string;
        "Sources": string;
    }>;
    /**
    * 调用DescribeDomainSrcHttpCodeData获取加速域名最小5分钟粒度的回源HTTP返回码占比数据。
    */ DescribeDomainSrcHttpCodeData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 需要查询的加速域名，多个域名用逗号（,）分隔。
        * @example `example1.com,example2.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点，不写默认读取过去24小时数据。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。
        * - 格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟。
        * @example `2015-11-30T05:33:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。
        * - 格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-11-30T05:40:00Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持**300**、 **3600**和**86400**秒。不传和传的值不支持时，使用默认值。
        * - 3天以内（不包含3天整）支持**300**、**3600**、 **86400**。
        * - 3-31天（不包含31天整）支持**3600**和**86400**。
        * - 31天以上支持**86400**。
        * @example `300`
        */ "Interval"?: string;
    }): Promise<{
        "HttpCodeData": {
            "UsageData": {
                "TimeStamp": string;
                "Value": {
                    "CodeProportionData": {
                        "Proportion": string;
                        "Code": string;
                    }[];
                };
            }[];
        };
        "DataInterval": string;
        "RequestId": string;
        "DomainName": string;
        "EndTime": string;
        "StartTime": string;
    }>;
    /**
    * 调用DescribeDomainRegionData获取加速域名天粒度的用户区域分布数据统计。
    */ DescribeDomainRegionData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 需要查询的加速域名，只支持一个域名，不写代表该账户下所有域名。
        * @example `test.test.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * - UTC时间，格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 不写默认读取过去24小时数据。
        * @example `2015-12-05T12:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - UTC时间，格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-12-07T12:00:00Z`
        */ "EndTime"?: string;
    }): Promise<{
        "Value": {
            "RegionProportionData": {
                "Bps": string;
                "Proportion": string;
                "ReqHitRate": string;
                "TotalBytes": string;
                "BytesProportion": string;
                "ByteHitRate": string;
                "TotalQuery": string;
                "RegionEname": string;
                "Region": string;
                "AvgResponseRate": string;
                "AvgObjectSize": string;
                "ReqErrRate": string;
                "Qps": string;
                "AvgResponseTime": string;
            }[];
        };
        "DataInterval": string;
        "RequestId": string;
        "DomainName": string;
        "EndTime": string;
        "StartTime": string;
    }>;
    /**
    * 调用DescribeDomainHttpCodeData获取加速域名最小5分钟粒度的HTTP返回码占比数据。
    */ DescribeDomainHttpCodeData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 需要查询的加速域名，支持批量，多个域名用逗号（,）分隔。
        * @example `test.test.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟，不写默认读取过去24小时数据。
        * @example `2015-11-30T05:33Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-11-30T05:40Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持**300**、 **3600**和**86400**秒。
        * - 3天以内（不包含3天整）支持**300**、**3600**、 **86400**。
        * - 3-31天（不包含31天整）支持**3600**和**86400**。
        * - 31天以上支持**86400**。
        * 不传和传的值不支持时，使用默认值。
        * @example `300`
        */ "Interval"?: string;
    }): Promise<{
        "HttpCodeData": {
            "UsageData": {
                "TimeStamp": string;
                "Value": {
                    "CodeProportionData": {
                        "Proportion": string;
                        "Code": string;
                    }[];
                };
            }[];
        };
        "DataInterval": string;
        "RequestId": string;
        "DomainName": string;
        "EndTime": string;
        "StartTime": string;
    }>;
    /**
    * 调用DescribeDomainRealTimeSrcHttpCodeData获取加速域名回源1分钟粒度的HTTP返回码占比数据。
    */ DescribeDomainRealTimeSrcHttpCodeData(query: {
        "RegionId"?: string;
        /**
        * 需要查询的加速域名，多个用逗号（,）隔开。
        * 不填该参数，代表查询当前用户下所有域名。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。
        * - 格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 不写默认读取过去1小时数据。
        * @example `2015-11-30T04:40:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据的结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。
        * - 格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-11-30T05:40:00Z`
        */ "EndTime"?: string;
        /**
        * 运营商英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，不传为所有运营商。
        * @example `beijing`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，不传为所有区域。
        * @example `unicom`
        */ "LocationNameEn"?: string;
    }): Promise<{
        "RealTimeSrcHttpCodeData": {
            "UsageData": {
                "TimeStamp": string;
                "Value": {
                    "RealTimeSrcCodeProportionData": {
                        "Proportion": string;
                        "Code": string;
                    }[];
                };
            }[];
        };
        "DataInterval": string;
        "RequestId": string;
        "DomainName": string;
        "EndTime": string;
        "StartTime": string;
    }>;
    /**
    * 调用DescribeDomainFileSizeProportionData获取加速域名最小1小时粒度的文件大小占比统计。
    */ DescribeDomainFileSizeProportionData(query: {
        "RegionId"?: string;
        /**
        * 需要查询的加速域名，只支持一个域名。
        * 如果参数为空，查询当前用户下所有域名。
        * @example `test.test.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间点，不写默认读取过去24小时数据。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。
        * - 格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为1小时。
        * @example `2015-11-30T01:33Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。
        * - 格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-11-30T05:40Z`
        */ "EndTime"?: string;
    }): Promise<{
        "DataInterval": string;
        "RequestId": string;
        "FileSizeProportionDataInterval": {
            "UsageData": {
                "Value": {
                    "FileSizeProportionData": {
                        "FileSize": string;
                        "Proportion": string;
                    }[];
                };
                "TimeStamp": string;
            }[];
        };
        "DomainName": string;
        "EndTime": string;
        "StartTime": string;
    }>;
    /**
    * 调用ListRealtimeLogDeliveryDomains查询实时日志投递服务下所有域名。
    */ ListRealtimeLogDeliveryDomains(query: {
        "RegionId"?: string;
        /**
        * 实时投递sls的ProjectName。
        * @example `ProjectName`
        */ "Project": string;
        /**
        * 实时投递sls的LogStoreName。
        * @example `LogstoreName`
        */ "Logstore": string;
        /**
        * 实时投递sls的Region，详情请参见[实时日志投递用户Region列表](~~27232~~)。
        * @example `ch-shanghai`
        */ "Region": string;
        "OwnerId"?: number;
    }): Promise<{
        "Content": {
            "Domains": {
                "DomainName": string;
                "Status": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用BatchSetCdnDomainServerCertificate批量设置域名下证书功能是否启用及修改证书信息。
    */ BatchSetCdnDomainServerCertificate(query: {
        "RegionId"?: string;
        /**
        * 指定证书所属加速域名，属于https加速类型，多个域名用逗号（,）隔开。
        * @example `example.com`
        */ "DomainName": string;
        /**
        * HTTPS证书是否启用。
        * - **on**：启用。
        * - **off**：不启用。
        * 默认取值：**off**。
        * @example `on`
        */ "SSLProtocol": string;
        "OwnerId"?: number;
        /**
        * 证书名称。
        * @example `yourCertName`
        */ "CertName"?: string;
        /**
        * **upload**为上传证书，**cas**为证书中心证书。
        * @example `cas`
        */ "CertType"?: string;
        /**
        * 安全证书内容，不启用证书则无需输入，配置证书请输入证书内容。
        * @example `yourSSLPub`
        */ "SSLPub"?: string;
        /**
        * 私钥内容，不启用证书则无需输入，配置证书请输入私钥内容。
        * @example `yourSSLPri`
        */ "SSLPri"?: string;
        /**
        * 地域。
        * @example `your region`
        */ "Region"?: string;
        /**
        * 设置为1时，忽略证书名称重复的校验，覆盖原有同名证书信息。
        * @example `1`
        */ "ForceSet"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDomainISPData获取加速域名天粒度的用户运营商分布数据统计。
    */ DescribeDomainISPData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 需要查询的加速域名，只支持一个域名，不写代表当前用户下所有域名。
        * @example `test.test.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * - UTC时间，格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 不写默认读取过去24小时数据。
        * @example `2015-12-05T00:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-12-07T00:00:00Z`
        */ "EndTime"?: string;
    }): Promise<{
        "Value": {
            "ISPProportionData": {
                "ByteHitRate": string;
                "TotalQuery": string;
                "Bps": string;
                "Proportion": string;
                "AvgResponseRate": string;
                "IspEname": string;
                "AvgObjectSize": string;
                "ISP": string;
                "ReqErrRate": string;
                "Qps": string;
                "AvgResponseTime": string;
                "ReqHitRate": string;
                "TotalBytes": string;
                "BytesProportion": string;
            }[];
        };
        "DataInterval": string;
        "RequestId": string;
        "DomainName": string;
        "EndTime": string;
        "StartTime": string;
    }>;
    /**
    * 调用EnableRealtimeLogDelivery开启域名实时日志投递。
    */ EnableRealtimeLogDelivery(query: {
        "RegionId"?: string;
        /**
        * 暂停实时日志投递服务域名，多个以逗号（,）分隔。
        * @example `example.com`
        */ "Domain": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDomainSrcTrafficData获取加速域名的回源流量监控数据，单位：bit。
    */ DescribeDomainSrcTrafficData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 如果参数为空，默认返回所有加速域名合并后数据。
        * 可输入需要查询的加速域名。支持批量域名查询，多个域名用逗号（,）分隔。
        * @example `example.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟，不写默认读取过去24小时数据。
        * @example `2015-12-10T20:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-12-10T21:00:00Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持**300**、 **3600**和**86400**秒。
        * - 3天以内（不包含3天整）支持**300**、**3600**、 **86400**。
        * - 3-31天（不包含31天整）支持**3600**和**86400**。
        * - 31天以上支持**86400**。
        * 不传和传的值不支持时，使用默认值。
        * @example `300`
        */ "Interval"?: string;
    }): Promise<{
        "DomainName": string;
        "DataInterval": string;
        "SrcFlowDataPerInterval": {
            "DataModule": {
                "TimeStamp": string;
                "Value": string;
                "HttpsValue": string;
            }[];
        };
        "RequestId": string;
        "StartTime": string;
        "EndTime": string;
    }>;
    /**
    * 调用DisableRealtimeLogDelivery暂停域名实时日志投递。
    */ DisableRealtimeLogDelivery(query: {
        "RegionId"?: string;
        /**
        * 暂停实时日志投递服务域名，多个以逗号（,）分隔。
        * @example `example.com`
        */ "Domain": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeCdnDomainByCertificate根据证书信息获取加速域名。
    */ DescribeCdnDomainByCertificate(query: {
        "RegionId"?: string;
        /**
        * 证书公钥，需要base64编码后再encodeURIComponent，支持pem格式。
        * @example `yourSSLPub`
        */ "SSLPub": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "content": {
            "Issuer": string;
            "CertType": string;
            "CertSubjectCommonName": string;
            "CertStartTime": string;
            "CertExpireTime": string;
            "DomainNames": string;
            "DomainList": string;
            "CertExpired": string;
            "CertCaIsLegacy": string;
        }[];
    }>;
    /**
    * 调用ModifyRealtimeLogDelivery更改域名实时日志投递。一个域名同时仅支持投递单个logstore。
    */ ModifyRealtimeLogDelivery(query: {
        "RegionId"?: string;
        /**
        * 实时投递sls的LogStoreName。
        * @example `ProjectName`
        */ "Project": string;
        /**
        * 实时投递sls的ProjectName。
        * @example `LogstoreName`
        */ "Logstore": string;
        /**
        * 实时投递sls的Region，详情请参见[实时日志投递用户Region列表](~~27232~~)。
        * @example `ch-shanghai`
        */ "Region": string;
        /**
        * 修改实时日志投递的域名。
        * @example `example.com`
        */ "Domain": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDomainQpsData获取加速域名的每秒访问次数QPS。
    */ DescribeDomainQpsData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 如果参数为空，默认返回所有加速域名合并后数据。
        * 可输入需要查询的加速域名。支持批量域名查询，多个域名用逗号（,）分隔。
        * @example `test.test.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟，不写默认读取过去24小时数据。
        * @example `2015-12-10T20:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-12-10T21:00Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持**300**、 **3600**和**86400**秒。
        * - 3天以内（不包含3天整）支持**300**、**3600**、 **86400**。
        * - 3-31天（不包含31天整）支持**3600**和**86400**。
        * - 31天以上支持**86400**。
        * 不传和传的值不支持时，使用默认值。
        * @example `300`
        */ "Interval"?: string;
        /**
        * 运营商英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，不传为所有运营商。
        * @example `unicom`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，不传为所有区域。
        * @example `beijing`
        */ "LocationNameEn"?: string;
    }): Promise<{
        "QpsDataInterval": {
            "DataModule": {
                "TimeStamp": string;
                "Value": string;
                "DynamicValue": string;
                "DynamicDomesticValue": string;
                "DynamicOverseasValue": string;
                "StaticValue": string;
                "StaticDomesticValue": string;
                "StaticOverseasValue": string;
            }[];
        };
        "DomainName": string;
        "DataInterval": string;
        "RequestId": string;
        "StartTime": string;
        "EndTime": string;
    }>;
    /**
    * 调用DescribeCdnDomainDetail获取指定加速域名配置的基本信息。
    */ DescribeCdnDomainDetail(query: {
        "RegionId"?: string;
        /**
        * 需要接入CDN的域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{
        "GetDomainDetailModel": {
            "CdnType": string;
            "Cname": string;
            "DomainName": string;
            "DomainStatus": string;
            "GmtCreated": string;
            "GmtModified": string;
            "HttpsCname": string;
            "SourceType": string;
            "Region": string;
            "ResourceGroupId": string;
            "SourceModels": {
                "SourceModel": {
                    "Enabled": string;
                    "Port": number;
                    "Type": string;
                    "Content": string;
                    "Priority": string;
                }[];
            };
            "Sources": {
                "Source": string[];
            };
        };
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDomainUsageData查询域名在特定计费区域的用量数据。
    */ DescribeDomainUsageData(query: {
        "RegionId"?: string;
        /**
        * 获取数据起始时间点。
        * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。最小数据粒度为5分钟。
        * @example `2015-12-10T20:00:00Z`
        */ "StartTime": string;
        /**
        * 获取数据结束时间。结束时间需大于起始时间，不能相差超过31天。
        * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-12-10T22:00:00Z`
        */ "EndTime": string;
        /**
        * 请求的数据类型。包括：**bps**、**traf**、**acc**。其中**acc**不支持**area**参数。
        * @example `bps`
        */ "Field": string;
        "OwnerId"?: number;
        /**
        * 需要获取的数据的协议。包括**https**、**http**和**all**。默认为**all**。
        * @example `all`
        */ "DataProtocol"?: string;
        /**
        * 如果参数为空，默认返回所有加速域名合并后数据。
        * 可以输入需要查询的加速域名，支持批量域名查询，多个域名用逗号（,）分隔。
        * @example `example.com`
        */ "DomainName"?: string;
        /**
        * 区域代号。包括：**CN**、**OverSeas**、**AP1**、**AP2**、**AP3**、**NA**、**SA**、**EU**、**MEAA**、**all**。
        * 不传为CN：中国大陆。
        * @example `CN`
        */ "Area"?: string;
        /**
        * 强制指定获取指定时间粒度的数据。支持**300**、**3600**或**86400**，分别代表5分钟、1小时和1天。
        * > - 如果指定Interval为300，最长可查询近半年的数据，单次查询时间跨度最长为3天。
        * - 如果指定Interval为3600或86400，最长可查询近1年的数据。
        * - 如果不指定Interval，单次查询跨度最长为1个月。当查询时间为1-3天时，数据按小时粒度返回；当查询时间大于4天时，数据按天粒度返回。
        * @example `300`
        */ "Interval"?: string;
    }): Promise<{
        "DomainName": string;
        "DataInterval": string;
        "UsageDataPerInterval": {
            "DataModule": {
                "TimeStamp": string;
                "PeakTime": string;
                "Value": string;
            }[];
        };
        "RequestId": string;
        "StartTime": string;
        "EndTime": string;
        "Area": string;
        "Type": string;
    }>;
    /**
    * 调用DescribeCdnUserResourcePackage查询CDN用户当前流量包。
    */ DescribeCdnUserResourcePackage(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "ResourcePackageInfos": {
            "ResourcePackageInfo": {
                "Status": string;
                "InstanceId": string;
                "CommodityCode": string;
                "InitCapacity": string;
                "EndTime": string;
                "StartTime": string;
                "DisplayName": string;
                "CurrCapacity": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDomainHitRateData获取加速域名的字节命中率（命中字节百分比）。
    */ DescribeDomainHitRateData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 需要查询的加速域名，只支持一个域名。不填代表查询当前用户下所有域名。
        * @example `www.yourdomain.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟，不写默认读取过去24小时数据。
        * @example `2017-12-21T08:00:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟。
        * @example `2017-12-22T08:00:00:00Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持**300**、 **3600**和**86400**秒。
        * - 3天以内（不包含3天整）支持**300**、**3600**、 **86400**。
        * - 3-31天（不包含31天整）支持**3600**和**86400**。
        * - 31天以上支持**86400**。
        * 不传和传的值不支持时，使用默认值。
        * @example `300`
        */ "Interval"?: string;
    }): Promise<{
        "DomainName": string;
        "DataInterval": string;
        "RequestId": string;
        "StartTime": string;
        "EndTime": string;
        "HitRateInterval": {
            "DataModule": {
                "TimeStamp": string;
                "Value": string;
                "HttpsValue": string;
            }[];
        };
    }>;
    /**
    * 调用SetWafConfig设置加速域名的Waf防护功能。
    */ SetWafConfig(query: {
        "RegionId"?: string;
        /**
        * 您的加速域名。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 配置ID。
        * @example `123`
        */ "ConfigId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyUserCustomLogConfig修改用户下自定义日志配置信息。
    */ ModifyUserCustomLogConfig(query: {
        "RegionId"?: string;
        /**
        * 日志配置ID。
        * @example `1232`
        */ "ConfigId": string;
        /**
        * 日志配置tag信息（不超过256个字符）。
        * @example `music`
        */ "Tag": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteRealtimeLogDelivery删除实时日志推送域名。
    */ DeleteRealtimeLogDelivery(query: {
        "RegionId"?: string;
        /**
        * 删除实时日志投递服务域名，多个以逗号（,）分隔。
        * @example `example.com`
        */ "Domain": string;
        /**
        * 实时投递sls的ProjectName。
        * @example `ProjectName`
        */ "Project": string;
        /**
        * 实时投递sls的LogStoreName。
        * @example `LogstoreName`
        */ "Logstore": string;
        /**
        * 实时投递sls的地域，详情请参见[实时日志投递用户Region列表](~~27232~~)。
        * @example `cn-shanghai`
        */ "Region": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AddCdnDomain添加加速域名。
    */ AddCdnDomain(query: {
        "RegionId"?: string;
        /**
        * 加速域名的业务类型，取值：
        * -  **web**：图片及小文件分发。
        * - **download**：大文件下载加速。
        * - **video**：视音频点播加速。
        * @example `web`
        */ "CdnType": string;
        /**
        * 需要接入CDN的域名。支持泛域名，以点号（.）开头，例如：.a.com
        * @example `.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 资源组ID，不传时，自动补全默认资源组ID。
        * @example `your resourceGroupId`
        */ "ResourceGroupId"?: string;
        /**
        * 回源地址列表。
        * @example `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80,"weight":"15"}]`
        */ "Sources"?: string;
        /**
        * 检测url。
        * @example `www.yourdomain.com/test.html`
        */ "CheckUrl"?: string;
        /**
        * 取值范围：**domestic**、**overseas**、**global**，默认**domestic**。
        * @example `domestic`
        */ "Scope"?: string;
        /**
        * 顶级接入域。
        * @example `www.yourTopLevelDomain`
        */ "TopLevelDomain"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeUserUsageDetailDataExportTask查询您账户下单个或多个域名5分钟明细数据的导出任务。
    */ DescribeUserUsageDetailDataExportTask(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 分页大小。默认值：**20**；最大值：**50**。取值：**1**~**50**之间的任意整数。
        * @example `10`
        */ "PageSize"?: string;
        /**
        * 取得第几页，取值范围：**1**~**100000**。
        * @example `1`
        */ "PageNumber"?: string;
    }): Promise<{
        "RequestId": string;
        "UsageDataPerPage": {
            "PageSize": number;
            "TotalCount": number;
            "PageNumber": number;
            "Data": {
                "DataItem": {
                    "TaskId": number;
                    "UpdateTime": string;
                    "DownloadUrl": string;
                    "CreateTime": string;
                    "Status": string;
                    "TaskConfig": {
                        "StartTime": string;
                        "EndTime": string;
                    };
                }[];
            };
        };
    }>;
    /**
    * 调用DeleteSpecificConfig删除加速域名的配置。
    */ DeleteSpecificConfig(query: {
        "RegionId"?: string;
        /**
        * @example `example.com`
        */ "DomainName": string;
        /**
        * 配置ID，多个用逗号（,）隔开。
        * @example `2317`
        */ "ConfigId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeRefreshQuota查询刷新、预热URL及目录的最大限制数量，以及当日剩余刷新、预热URL及目录的次数。
    */ DescribeRefreshQuota(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "DirQuota": string;
        "DirRemain": string;
        "RequestId": string;
        "UrlQuota": string;
        "UrlRemain": string;
        "PreloadQuota": string;
        "PreloadRemain": string;
    }>;
    /**
    * 调用CreateRealTimeLogDelivery创建域名实时日志投递。
    */ CreateRealTimeLogDelivery(query: {
        "RegionId"?: string;
        /**
        * 实时投递sls的ProjectName。
        * @example `test`
        */ "Project": string;
        /**
        * 实时投递sls的LogStoreName。
        * @example `Logstore`
        */ "Logstore": string;
        /**
        * 实时投递sls的Region。详情请参见[实时日志投递用户Region列表](~~27232~~)。
        * @example `cn-shanghai`
        */ "Region": string;
        /**
        * 开启实时日志投递服务域名。
        * @example `example.com`
        */ "Domain": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDomainTopReferVisit获取加速域名某天的热门页面引用次数排名。
    */ DescribeDomainTopReferVisit(query: {
        "RegionId"?: string;
        /**
        * 如果不填该参数，默认返回所有加速域名合并后数据。
        * 可以输入需要查询的加速域名 ，多个域名用逗号(,)分隔。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间，不写默认读取过去24小时数据。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。
        * - 格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟。
        * @example `2017-12-21T08:00:00:00Z`
        */ "StartTime"?: string;
        /**
        * 排序方式。支持**traf**和**pv**，默认值：**pv**。
        * @example `pv`
        */ "SortBy"?: string;
        /**
        * 百分比。
        * @example `0.5`
        */ "Percent"?: string;
    }): Promise<{
        "TopReferList": {
            "ReferList": {
                "VisitData": string;
                "ReferDetail": string;
            }[];
        };
        "RequestId": string;
        "DomainName": string;
        "StartTime": string;
    }>;
    /**
    * 调用DescribeDomainCustomLogConfig获取域名自定义日志格式配置信息。
    */ DescribeDomainCustomLogConfig(query: {
        "RegionId"?: string;
        /**
        * 域名（只支持单个查询）。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{
        "ConfigId": string;
        "Tag": string;
        "Remark": string;
        "Sample": string;
        "RequestId": string;
    }>;
    /**
    * 调用ModifyCdnService变更CDN服务的计费类型。
    */ ModifyCdnService(query: {
        "RegionId"?: string;
        /**
        * 开通服务的计费类型：
        * - **PayByTraffic**：流量。
        * - **PayByBandwidth**：带宽峰值。
        * @example `PayByTraffic`
        */ "InternetChargeType": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用SetWaitingRoomConfig设置waiting_room功能，只支持全站加速类型域名。
    */ SetWaitingRoomConfig(query: {
        "RegionId"?: string;
        /**
        * 您的加速域名。
        * @example `example.com`
        */ "DomainName": string;
        /**
        * 开启WaitingRoom功能的URI正则字符串。
        * @example `xxx`
        */ "WaitUri": string;
        /**
        * 允许回源比例，取值范围：**0**-**100**。
        * @example `30`
        */ "AllowPct": number;
        /**
        * 进入排队后，排队时长，单位：秒。
        * @example `30`
        */ "MaxTimeWait": number;
        /**
        * 离开排队后，跳过排队时长，单位：秒。
        * @example `20`
        */ "GapTime": number;
        /**
        * 排队等待页面URL。
        * @example `WaitUrl`
        */ "WaitUrl": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用RefreshObjectCaches刷新节点上的文件内容。刷新指定URL内容至Cache节点，支持URL批量刷新。
    */ RefreshObjectCaches(query: {
        "RegionId"?: string;
        /**
        * 多个URL之间需要用换行符（\n）或（\r\n）分隔。
        * @example `abc.com/image/1.png`
        */ "ObjectPath": string;
        "OwnerId"?: number;
        /**
        * 刷新的类型， 其值可以为**File**或**Directory**。默认值：**File**。
        * @example `File`
        */ "ObjectType"?: string;
    }): Promise<{
        "RefreshTaskId": string;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDomainBpsData获取加速域名的网络带宽监控数据。
    */ DescribeDomainBpsData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 如果参数为空，默认返回所有加速域名合并后数据。
        * 可输入需要查询的加速域名，支持批量域名查询，多个域名用逗号（,）分隔。
        * @example `test.test.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟，
        * - 不写默认读取过去24小时数据。
        * @example `2015-12-10T20:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-12-10T20:00Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持**300**、 **3600**和**86400**秒。
        * - 3天以内（不包含3天整）支持**300**、**3600**、 **86400**。
        * - 3-31天（不包含31天整）支持**3600**和**86400**。
        * - 31天及以上支持**86400**。
        * 不传和传的值不支持时，使用默认值。
        * @example `300`
        */ "Interval"?: string;
        /**
        * 运营商英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，不传为所有运营商。
        * @example `telecom`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，不传为所有区域。
        * @example `beijing`
        */ "LocationNameEn"?: string;
    }): Promise<{
        "BpsDataPerInterval": {
            "DataModule": {
                "TimeStamp": string;
                "Value": string;
                "DomesticValue": string;
                "OverseasValue": string;
                "L2Value": string;
                "DomesticL2Value": string;
                "OverseasL2Value": string;
                "DynamicValue": string;
                "DynamicDomesticValue": string;
                "DynamicOverseasValue": string;
                "StaticValue": string;
                "StaticDomesticValue": string;
                "StaticOverseasValue": string;
            }[];
        };
        "SupplyBpsDatas": {
            "DataModule": {
                "TimeStamp": string;
                "Value": string;
            }[];
        };
        "DomainName": string;
        "DataInterval": string;
        "RequestId": string;
        "StartTime": string;
        "EndTime": string;
    }>;
    /**
    * 调用DescribeDomainRealTimeHttpCodeData获取加速域名1分钟粒度的HTTP返回码占比数据。
    */ DescribeDomainRealTimeHttpCodeData(query: {
        "RegionId"?: string;
        /**
        * 需要查询的加速域名，支持批量，多个域名用逗号（,）分隔。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 不写默认读取过去1小时数据。
        * @example `2015-11-30T05:39:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-11-30T05:40:00Z`
        */ "EndTime"?: string;
        /**
        * 运营商英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，不传为所有运营商。
        * @example `beijing`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，不传为所有区域。
        * @example `unicom`
        */ "LocationNameEn"?: string;
    }): Promise<{
        "RealTimeHttpCodeData": {
            "UsageData": {
                "TimeStamp": string;
                "Value": {
                    "RealTimeCodeProportionData": {
                        "Proportion": string;
                        "Code": string;
                    }[];
                };
            }[];
        };
        "DataInterval": string;
        "RequestId": string;
        "DomainName": string;
        "EndTime": string;
        "StartTime": string;
    }>;
    /**
    * 调用CreateUserUsageDataExportTask创建账号历史用量数据导出任务，将历史用量生成PDF文件用于下载。
    */ CreateUserUsageDataExportTask(query: {
        "RegionId"?: string;
        /**
        * 获取数据起始时间点，最小数据粒度为5分钟。
        * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-12-10T20:00:00Z`
        */ "StartTime": string;
        /**
        * 获取数据结束时间点，结束时间需大于起始时间。
        * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-12-10T21:00:00Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 任务名称。
        * @example `刷新`
        */ "TaskName"?: string;
        /**
        * 导出文件的语言，支持**zh-cn**和**en-us**，分别为简体中文和英文，默认为中文**zh-cn**。
        * @example `en`
        */ "Language"?: string;
    }): Promise<{
        "RequestId": string;
        "StartTime": string;
        "EndTime": string;
        "TaskId": string;
    }>;
    /**
    * 调用BatchStartCdnDomain启用状态为停用的加速域名，将DomainStatus变更为Online。
    */ BatchStartCdnDomain(query: {
        "RegionId"?: string;
        /**
        * 需要接入CDN的域名，用逗号（,）分隔。
        * @example `example.com`
        */ "DomainNames": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ListRealtimeLogDeliveryInfos查询所有实时日志投递服务信息。
    */ ListRealtimeLogDeliveryInfos(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "Content": {
            "RealtimeLogDeliveryInfos": {
                "Project": string;
                "Logstore": string;
                "Region": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDomainReqHitRateData获取加速域名的请求命中率（命中请求百分比）。
    */ DescribeDomainReqHitRateData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 需要查询的加速域名，只支持一个域名，不写代表查询当前用户下所有域名。
        * @example `www.yourdomain.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟，不写默认读取过去24小时数据。
        * @example `2017-12-21T08:00:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2017-12-22T08:00:00:00Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持**300**、 **3600**和**86400**秒。
        * - 3天以内（不包含3天整）支持**300**、**3600**、 **86400**。
        * - 3-31天（不包含31天整）支持**3600**和**86400**。
        * - 31天以上支持**86400**。
        * 不传和传的值不支持时，使用默认值。
        * @example `300`
        */ "Interval"?: string;
    }): Promise<{
        "DomainName": string;
        "DataInterval": string;
        "RequestId": string;
        "StartTime": string;
        "EndTime": string;
        "ReqHitRateInterval": {
            "DataModule": {
                "TimeStamp": string;
                "Value": string;
                "HttpsValue": string;
            }[];
        };
    }>;
    /**
    * 调用BatchAddCdnDomain批量添加加速域名，一个用户最多添加20个域名。
    */ BatchAddCdnDomain(query: {
        "RegionId"?: string;
        /**
        * 加速域名的业务类型。 取值：
        * - **web**：图片及小文件分发。
        * - **download**：大文件下载加速。
        * - **Video**：视频点播加速。
        * @example `web`
        */ "CdnType": string;
        /**
        * 需要接入CDN的域名。多个域名之间用逗号（,）隔开。
        * @example `example.com`
        */ "DomainName": string;
        /**
        * 回源地址列表。
        * @example `[{“content”:”1.1.1.1”,”type”:”ipaddr”,”priority”:”20”,”port”:80,”weight”:”15”}]`
        */ "Sources": string;
        "OwnerId"?: number;
        /**
        * 资源组ID，不传时，自动补全默认资源组ID。
        * @example `123`
        */ "ResourceGroupId"?: string;
        /**
        * 检测url。
        * @example `url`
        */ "CheckUrl"?: string;
        /**
        * 取值范围：
        * - **domestic**
        * - **overseas**
        * - **global**
        * @example `domestic`
        */ "Scope"?: string;
        /**
        * 顶级接入域。
        * @example `www.yourdomain.com`
        */ "TopLevelDomain"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeRealtimeDeliveryAcc查询实时日志投递次数。
    */ DescribeRealtimeDeliveryAcc(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 获取日志起始时间点。
        * 日期格式按照ISO8601表示法，并使用UTC时间。
        * @example `2016-10-20T04:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间需大于起始时间。起止时间和结束时间，间隔不超过一年。
        * 获取日期格式按照ISO8601表示法，并使用UTC时间。
        * @example `2016-10-20T04:00:00Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持**300**、**3600**、**86400**秒。
        * - 不传和传的值不支持时，时间跨度不超过3天，默认值**300**秒。
        * - 超过3天不超过30天默认值**3600**秒。
        * - 超过30天默认值**86400**秒。
        * @example `300`
        */ "Interval"?: string;
        /**
        * 实时日志投递的Project。
        * @example `Project`
        */ "Project"?: string;
        /**
        * 实时日志投递的Logstore。
        * @example `LogStore`
        */ "LogStore"?: string;
    }): Promise<{
        "RequestId": string;
        "ReatTimeDeliveryAccData": {
            "AccData": {
                "TimeStamp": string;
                "FailedNum": number;
                "SuccessNum": number;
            }[];
        };
    }>;
    /**
    * 调用DescribeCdnUserQuota查询用户资源上限及已使用情况。
    */ DescribeCdnUserQuota(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "DomainQuota": number;
        "RefreshUrlQuota": number;
        "RefreshDirQuota": number;
        "RefreshUrlRemain": number;
        "RefreshDirRemain": number;
        "PreloadQuota": number;
        "PreloadRemain": number;
        "BlockQuota": number;
        "BlockRemain": number;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDomainRealTimeByteHitRateData获取域名1分钟粒度字节命中率数据。
    */ DescribeDomainRealTimeByteHitRateData(query: {
        "RegionId"?: string;
        /**
        * 加速域名。
        * @example `test.test.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。
        * - 不填默认查询从EndTime起一小时内的数据。
        * @example `2016-10-20T04:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。
        * - 不填默认查询从开始时间起一小时内的数据。
        * @example `2016-10-20T04:00:00Z`
        */ "EndTime"?: string;
    }): Promise<{
        "Data": {
            "ByteHitRateModel": {
                "TimeStamp": string;
                "ByteHitRate": number;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用DescribeRefreshTasks查询刷新、预热状态是否在全网生效。
    */ DescribeRefreshTasks(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 按任务ID查询刷新状态。
        * @example `1234321`
        */ "TaskId"?: string;
        /**
        * 按路径查询，准确匹配。
        * @example `http://aaa.com/1.txt`
        */ "ObjectPath"?: string;
        /**
        * 取得第几页 取值范围为：**1**~**100000**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 任务类型：
        * - **file**
        * - **path**
        * - **preload**
        * 当指定**DomainName**或**TaskStatus**时，该参数为必选项。
        * @example `file`
        */ "ObjectType"?: string;
        /**
        * 域名。
        * @example `www.yourdomain.com`
        */ "DomainName"?: string;
        /**
        * 任务状态：
        * - **Complete**：完成。
        * - **Refreshing**：刷新中。
        * - **Failed**：刷新失败。
        * @example `Complete`
        */ "Status"?: string;
        /**
        * 分页大小，默认**20**，最大**50**。取值：**1**~**50**之前的任意整数。
        * @example `20`
        */ "PageSize"?: number;
        /**
        * 开始时间。
        * @example `2017-12-21T08:00:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间。
        * @example `2017-12-22T08:00:00:00Z`
        */ "EndTime"?: string;
        /**
        * 资源组ID。
        * @example `your resourceGroupId`
        */ "ResourceGroupId"?: string;
    }): Promise<{
        "Tasks": {
            "CDNTask": {
                "CreationTime": string;
                "ObjectPath": string;
                "Status": string;
                "TaskId": string;
                "ObjectType": string;
                "Process": string;
            }[];
        };
        "PageNumber": number;
        "PageSize": number;
        "TotalCount": number;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDomainRealTimeSrcBpsData获取域名1分钟粒度回源带宽数据。
    */ DescribeDomainRealTimeSrcBpsData(query: {
        "RegionId"?: string;
        /**
        * 需要查询的加速域名，多个用逗号（,）隔开。
        * 不填该参数，代表查询当前用户下所有域名。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 不写默认读取过去1小时数据。
        * @example `2015-12-10T20:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据的结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-12-10T20:01:00Z`
        */ "EndTime"?: string;
    }): Promise<{
        "DomainName": string;
        "DataInterval": string;
        "RealTimeSrcBpsDataPerInterval": {
            "DataModule": {
                "TimeStamp": string;
                "Value": string;
            }[];
        };
        "RequestId": string;
        "StartTime": string;
        "EndTime": string;
    }>;
    /**
    * 调用PushObjectCache将源站的内容主动预热到L2 Cache节点上，您首次访问可直接命中缓存，缓解源站压力。
    */ PushObjectCache(query: {
        "RegionId"?: string;
        /**
        * 多个URL之间需要用换行符（\n）或（\r\n）分隔。
        * @example `abc.com/image/1.png`
        */ "ObjectPath": string;
        "OwnerId"?: number;
        /**
        * 预热区域。取值：
        * - **domestic**。
        * - **overseas**。
        * @example `domestic`
        */ "Area"?: string;
    }): Promise<{
        "PushTaskId": string;
        "RequestId": string;
    }>;
    /**
    * 调用ListUserCustomLogConfig获取用户下所有自定义日志配置信息。
    */ ListUserCustomLogConfig(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "ConfigIds": {
            "ConfigId": string[];
        };
    }>;
    /**
    * 调用DescribeCdnDomainConfigs查询域名配置，一次可查询多个功能配置。
    */ DescribeCdnDomainConfigs(query: {
        "RegionId"?: string;
        /**
        * 加速域名。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 功能列表名称，用逗号（,）分隔。
        * @example `aliauth`
        */ "FunctionNames"?: string;
    }): Promise<{
        "RequestId": string;
        "DomainConfigs": {
            "DomainConfig": {
                "Status": string;
                "FunctionArgs": {
                    "FunctionArg": {
                        "ArgName": string;
                        "ArgValue": string;
                    }[];
                };
                "ConfigId": number;
                "FunctionName": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeCdnCertificateDetail查询cdn证书详细信息。
    */ DescribeCdnCertificateDetail(query: {
        "RegionId"?: string;
        /**
        * 证书名。
        * @example `xxx`
        */ "CertName": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "Cert": string;
        "Key": string;
        "CertId": string;
        "CertName": string;
    }>;
    /**
    * 调用DescribeCdnDomainLogs获取指定域名的原始访问日志的下载地址。
    */ DescribeCdnDomainLogs(query: {
        "RegionId"?: string;
        /**
        * 域名，只支持单个查询。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 分页大小，默认**300**，最大**1000**，取值：**1**~**1000**。
        * @example `300`
        */ "PageSize"?: number;
        /**
        * 取得第几页，取值范围为：大于**1**的任意整数。
        * @example `2`
        */ "PageNumber"?: number;
        /**
        * 获取日志起始时间点。
        * 日期格式按照ISO8601表示法，并使用UTC时间。
        * @example `2017-12-21T08:00:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取日志结束时间。结束时间需大于起始时间，起止时间和结束时间，间隔不超过一年。
        * 获取日期格式按照ISO8601表示法，并使用UTC时间。
        * @example `2017-12-22T08:00:00:00Z`
        */ "EndTime"?: string;
    }): Promise<{
        "DomainLogModel": {
            "DomainName": string;
            "PageNumber": number;
            "TotalCount": number;
            "PageSize": number;
            "DomainLogDetails": {
                "DomainLogDetail": {
                    "EndTime": string;
                    "LogName": string;
                    "LogPath": string;
                    "LogSize": number;
                    "StartTime": string;
                }[];
            };
        };
        "RequestId": string;
    }>;
    /**
    * 调用DescribeCdnHttpsDomainList获取用户所有证书信息。
    */ DescribeCdnHttpsDomainList(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 取得第几页，取值范围为：**1**~**100000**。
        * @example `5`
        */ "PageNumber"?: number;
        /**
        * 分页大小，默认**20**。
        * @example `20`
        */ "PageSize"?: number;
        /**
        * 搜索关键字。
        * @example `com`
        */ "Keyword"?: string;
    }): Promise<{
        "CertInfos": {
            "CertInfo": {
                "CertUpdateTime": string;
                "CertType": string;
                "CertName": string;
                "DomainName": string;
                "CertStatus": string;
                "CertExpireTime": string;
                "CertStartTime": string;
                "CertCommonName": string;
            }[];
        };
        "TotalCount": number;
        "RequestId": string;
    }>;
    /**
    * 调用BatchUpdateCdnDomain批量更新加速域名。
    */ BatchUpdateCdnDomain(query: {
        "RegionId"?: string;
        /**
        * 需要接入CDN的域名。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 回源地址列表。
        * @example `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80,"weight":"15"}]`
        */ "Sources"?: string;
        /**
        * 资源组ID。
        * @example `abc`
        */ "ResourceGroupId"?: string;
        /**
        * 顶级接入域。
        * @example `example.com`
        */ "TopLevelDomain"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteUserUsageDataExportTask删除账号历史用量数据导出任务。
    */ DeleteUserUsageDataExportTask(query: {
        "RegionId"?: string;
        /**
        * 任务ID。
        * @example `10`
        */ "TaskId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDomainUvData获取加速域名最小1小时粒度的UV页面独立访问统计。
    */ DescribeDomainUvData(query: {
        "RegionId"?: string;
        /**
        * 需要查询的加速域名，只支持一个域名，不写代表查询当前用户下所有域名。
        * @example `test.test.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为1小时，不写默认读取过去24小时数据。
        * @example `2015-11-29T00:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-11-30T00:00:00Z`
        */ "EndTime"?: string;
    }): Promise<{
        "DataInterval": string;
        "RequestId": string;
        "DomainName": string;
        "EndTime": string;
        "StartTime": string;
        "UvDataInterval": {
            "UsageData": {
                "TimeStamp": string;
                "Value": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeUserUsageDataExportTask列出用户最近三个月的用量导出任务信息。
    */ DescribeUserUsageDataExportTask(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 分页大小。默认值：**20**；最大值：**50**。取值：**1**~**50**之间的任意整数。
        * @example `20`
        */ "PageSize"?: string;
        /**
        * 取得第几页，取值范围：**1**~**100000**。
        * @example `1`
        */ "PageNumber"?: string;
    }): Promise<{
        "RequestId": string;
        "UsageDataPerPage": {
            "PageSize": number;
            "TotalCount": number;
            "PageNumber": number;
            "Data": {
                "TaskId": number;
                "UpdateTime": string;
                "DownloadUrl": string;
                "CreateTime": string;
                "Status": string;
            };
            "TaskConfig": {
                "StartTime": string;
                "EndTime": string;
            };
        };
    }>;
    /**
    * 调用DescribeUserTags查询用户标签。
    */ DescribeUserTags(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "Tags": {
            "Key": string;
            "Value": string[];
        }[];
        "RequestId": string;
    }>;
    /**
    * 调用DescribeCustomLogConfig根据configId查询自定义日志配置详细信息。
    */ DescribeCustomLogConfig(query: {
        "RegionId"?: string;
        /**
        * 自定义配置ID。
        * @example `123`
        */ "ConfigId": string;
        "OwnerId"?: number;
    }): Promise<{
        "Tag": string;
        "RequestId": string;
        "Sample": string;
        "Remark": string;
    }>;
    /**
    * 调用ModifyCdnDomainSchdmByProperty修改加速域名。
    */ ModifyCdnDomainSchdmByProperty(query: {
        "RegionId"?: string;
        /**
        * 需修改加速区域的域名。
        * @example `example.com`
        */ "DomainName": string;
        /**
        * 调度域属性。{"coverage":"overseas"} 中coverage参数支持**domestic**、**overseas**、**global**。
        * @example `{"coverage":"overseas"}`
        */ "Property": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用BatchSetCdnDomainConfig进行域名批量配置。
    */ BatchSetCdnDomainConfig(query: {
        "RegionId"?: string;
        /**
        * 加速域名，多个用逗号（,）分隔。
        * @example `example.com`
        */ "DomainNames": string;
        /**
        * 功能列表。
        * @example `[{"functionArgs":[{"argName":"domain_name","argValue":"api.hellodtworld.com"}],"functionName":"set_req_host_header"}]`
        */ "Functions": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeTopDomainsByFlow获取用户按流量排名的域名。
    */ DescribeTopDomainsByFlow(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟，不写默认读取当月数据。
        * @example `2017-12-21T08:00:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2017-12-22T08:00:00:00Z`
        */ "EndTime"?: string;
        /**
        * 域名获取数量限制，默认为**20**，取值支持**1**~**100**。
        * @example `20`
        */ "Limit"?: number;
    }): Promise<{
        "DomainCount": number;
        "DomainOnlineCount": number;
        "RequestId": string;
        "EndTime": string;
        "TopDomains": {
            "TopDomain": {
                "MaxBps": number;
                "Rank": number;
                "TrafficPercent": number;
                "TotalTraffic": number;
                "TotalAccess": number;
                "DomainName": string;
                "MaxBpsTime": number;
            }[];
        };
        "StartTime": string;
    }>;
    /**
    * 调用DescribeCdnCertificateList获取证书列表信息。
    */ DescribeCdnCertificateList(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 域名。仅支持单个域名查询。
        * @example `example.com`
        */ "DomainName"?: string;
    }): Promise<{
        "CertificateListModel": {
            "Count": number;
            "CertList": {
                "Cert": {
                    "CertName": string;
                    "Issuer": string;
                    "LastTime": number;
                    "CertId": number;
                    "Common": string;
                    "Fingerprint": string;
                }[];
            };
        };
        "RequestId": string;
    }>;
    /**
    * 调用DescribeUserVipsByDomain按域名查询vip列表。
    */ DescribeUserVipsByDomain(query: {
        "RegionId"?: string;
        /**
        * 域名，只支持单个域名。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 取值：
        * - **on**：健康vip。
        * - **off**：全部vip。
        * @example `on`
        */ "Available"?: string;
    }): Promise<{
        "Vips": {
            "Vip": string[];
        };
        "RequestId": string;
        "DomainName": string;
    }>;
    /**
    * 调用DescribeDomainBpsDataByTimeStamp获取加速域名的在某个时刻的带宽数据。
    */ DescribeDomainBpsDataByTimeStamp(query: {
        "RegionId"?: string;
        /**
        * 要查询的域名，仅支持单个查询。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        /**
        * 查询目标时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。
        * - 格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟。
        * @example `2016-08-01T22:00Z`
        */ "TimePoint": string;
        /**
        * 需要查询目标Isp列表，用逗号（,）隔开，不能为空， ISP名通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得。
        * @example `unicom,telecom`
        */ "IspNames": string;
        /**
        * 需要查询目标区域列表，用逗号（,）隔开，不能为空。Location名通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得。
        * @example `liaoning,guangxi`
        */ "LocationNames": string;
        "OwnerId"?: number;
    }): Promise<{
        "TimeStamp": string;
        "BpsDataList": {
            "BpsDataModel": {
                "LocationName": string;
                "Bps": number;
                "IspName": string;
            }[];
        };
        "RequestId": string;
        "DomainName": string;
    }>;
    /**
    * 调用DescribeRangeDataByLocateAndIspService获取加速域名的在某个时刻不同Locate（节点）和Isp（运营商）上的带宽数据。
    */ DescribeRangeDataByLocateAndIspService(query: {
        "RegionId"?: string;
        /**
        * 要查询的域名，仅支持单个。
        * @example `abc.com`
        */ "DomainNames": string;
        /**
        * 获取数据开始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟。
        * @example `2017-12-22T07:00:00:00Z`
        */ "StartTime": string;
        /**
        * 获取数据结束时间点。
        * - 结束时间大于开始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mmZ。
        * @example `2017-12-22T08:00:00:00Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 需要查询目标Isp（运营商）列表，用逗号（,）隔开，不能为空。
        * ISP名通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得。
        * @example `unicom,telecom`
        */ "IspNames"?: string;
        /**
        * 需要查询目标区域列表，用逗号（,）隔开，不能为空。
        * Location（区域）名通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得。
        * @example `liaoning,guangxi`
        */ "LocationNames"?: string;
    }): Promise<{
        "JsonResult": {
            "1472659200": {
                "\u5929\u6D25\u5E02": {
                    "\u7535\u4FE1": {
                        "bandwidth": number;
                        "pv": number;
                        "hit_rate": number;
                        "http_codes": {
                            "200": number;
                            "206": number;
                            "302": number;
                            "304": number;
                            "400": number;
                            "403": number;
                            "404": number;
                            "405": number;
                            "408": number;
                            "412": number;
                            "416": number;
                            "500": number;
                            "501": number;
                            "502": number;
                            "503": number;
                            "504": number;
                            "000": number;
                        };
                        "rt": number;
                    };
                    "\u8054\u901A": {};
                    "\u79FB\u52A8": {};
                };
                "\u5317\u4EAC\u5E02": {
                    "\u7535\u4FE1": {
                        "bandwidth": number;
                        "pv": number;
                        "hit_rate": number;
                        "http_codes": {
                            "200": number;
                            "206": number;
                            "302": number;
                            "304": number;
                            "400": number;
                            "403": number;
                            "404": number;
                            "405": number;
                            "408": number;
                            "412": number;
                            "416": number;
                            "500": number;
                            "501": number;
                            "502": number;
                            "503": number;
                            "504": number;
                            "000": number;
                        };
                        "rt": number;
                    };
                    "\u8054\u901A": {};
                    "\u79FB\u52A8": {};
                };
            };
            "1472659500": {
                "\u5929\u6D25\u5E02": {
                    "\u7535\u4FE1": {
                        "bandwidth": number;
                        "pv": number;
                        "hit_rate": number;
                        "http_codes": {
                            "200": number;
                            "206": number;
                            "302": number;
                            "304": number;
                            "400": number;
                            "403": number;
                            "404": number;
                            "405": number;
                            "408": number;
                            "412": number;
                            "416": number;
                            "500": number;
                            "501": number;
                            "502": number;
                            "503": number;
                            "504": number;
                            "000": number;
                        };
                        "rt": number;
                    };
                    "\u8054\u901A": {};
                    "\u79FB\u52A8": {};
                };
            };
        }[];
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDomainRealTimeBpsData获取域名1分钟粒度带宽数据。
    */ DescribeDomainRealTimeBpsData(query: {
        "RegionId"?: string;
        /**
        * 加速域名，多个用逗号（,）隔开。
        * @example `test.test.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 运营商英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，不传为所有运营商。
        * @example `telecom`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，不传为所有区域。
        * @example `beijing`
        */ "LocationNameEn"?: string;
        /**
        * 起始时间，日期格式按照ISO8601表示法，并使用UTC时间。
        * 不填默认查询从EndTime起一小时内的数据。
        * @example `2016-10-20T04:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间，日期格式按照ISO8601表示法，并使用UTC时间。
        * 不填默认查询从StartTime起一小时内的数据。
        * @example `2016-10-20T04:00:00Z`
        */ "EndTime"?: string;
    }): Promise<{
        "Data": {
            "BpsModel": {
                "TimeStamp": string;
                "Bps": number;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用TagResources添加资源标签。
    */ TagResources(query: {
        /**
        * 地域ID。
        * @example `ch-shanghai`
        */ "RegionId"?: string;
        /**
        * 固定值：**DOMAIN**。
        * @example `DOMAIN`
        */ "ResourceType": string;
        "Tag": string[];
        "OwnerId"?: number;
        "ResourceId": string[];
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeCdnService查询CDN服务状态。包括：当前计费类型，服务开通时间，下次生效的计费类型，当前业务状态等。
    */ DescribeCdnService(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "ChangingAffectTime": string;
        "ChangingChargeType": string;
        "InternetChargeType": string;
        "OpeningTime": string;
        "OperationLocks": {
            "LockReason": any[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDomainRealTimeTrafficData获取加速域名的1分钟流量监控数据，单位：Byte。
    */ DescribeDomainRealTimeTrafficData(query: {
        "RegionId"?: string;
        /**
        * 如果参数为空，默认返回所有加速域名合并后数据。
        * 可输入需要查询的加速域名。支持批量域名查询，多个域名用逗号（,）分隔。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟，不写默认读取过去1小时数据。
        * @example `2015-12-10T20:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-12-10T20:01:00Z`
        */ "EndTime"?: string;
    }): Promise<{
        "DomainName": string;
        "DataInterval": string;
        "RealTimeTrafficDataPerInterval": {
            "DataModule": {
                "TimeStamp": string;
                "Value": string;
            }[];
        };
        "RequestId": string;
        "StartTime": string;
        "EndTime": string;
    }>;
    /**
    * 调用SetDomainServerCertificate设置指定域名下证书功能是否启用及修改证书信息。
    */ SetDomainServerCertificate(query: {
        "RegionId"?: string;
        /**
        * 指定证书所属加速域名，需属于https加速类型。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        /**
        * HTTPS证书是否启用，取值：
        * - **on**：启用。
        * - **off**（默认）：不启用。
        * @example `on`
        */ "ServerCertificateStatus": string;
        "OwnerId"?: number;
        /**
        * 证书名称。
        * @example `myCert1`
        */ "CertName"?: string;
        /**
        * 证书类型：
        * - **upload**：上传证书。
        * - **cas**：证书中心证书。
        * - **free**：免费证书。
        * @example `cas`
        */ "CertType"?: string;
        /**
        * 安全证书内容，不启用证书则无需输入，配置证书请输入证书内容。
        * @example `xxxxxx`
        */ "ServerCertificate"?: string;
        /**
        * 私钥内容，不启用证书则无需输入，配置证书请输入私钥内容。
        * @example `xxxxxxxx`
        */ "PrivateKey"?: string;
        /**
        * 地区。
        * @example `cn-hangzhou`
        */ "Region"?: string;
        /**
        * 设置为1时，忽略证书名称重复的校验，覆盖原有同名证书信息。
        * @example `1`
        */ "ForceSet"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDomainRealTimeSrcTrafficData获取加速域名的1分钟回源流量监控数据，单位：bit。
    */ DescribeDomainRealTimeSrcTrafficData(query: {
        "RegionId"?: string;
        /**
        * 如果该参数为空，默认返回所有加速域名合并后数据。
        * 可以输入需要查询的加速域名。支持批量域名查询，多个域名用逗号（,）分隔。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 不写默认读取过去1小时数据。
        * @example `2015-12-10T20:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-12-10T20:01:00Z`
        */ "EndTime"?: string;
    }): Promise<{
        "DomainName": string;
        "DataInterval": string;
        "RealTimeSrcTrafficDataPerInterval": {
            "DataModule": {
                "TimeStamp": string;
                "Value": string;
            }[];
        };
        "RequestId": string;
        "StartTime": string;
        "EndTime": string;
    }>;
    /**
    * 调用ListDomainsByLogConfigId查询应用某自定义日志格式的所有域名列表。
    */ ListDomainsByLogConfigId(query: {
        "RegionId"?: string;
        /**
        * 自定义配置ID。
        * @example `123`
        */ "ConfigId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "Domains": {
            "Domain": string[];
        };
    }>;
    /**
    * 调用DescribeDomainSrcBpsData获取加速域名的回源带宽监控数据。
    */ DescribeDomainSrcBpsData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 如果参数为空，默认返回所有加速域名合并后数据。
        * 可输入需要查询的加速域名。支持批量域名查询，多个域名用逗号（,）分隔。
        * @example `www.yourdomain.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟， 不写默认读取过去24小时数据。
        * @example `2017-12-10T20:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2017-12-12T20:00Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持**300**、 **3600**和**86400**秒。
        * - 3天以内（不包含3天整）支持**300**、**3600**、 **86400**。
        * - 3-31天（不包含31天整）支持**3600**和**86400**。
        * - 31天以上支持**86400**。
        * 不传和传的值不支持时，使用默认值。
        * @example `300`
        */ "Interval"?: string;
    }): Promise<{
        "DomainName": string;
        "DataInterval": string;
        "SrcBpsDataPerInterval": {
            "DataModule": {
                "TimeStamp": string;
                "Value": string;
            }[];
        };
        "RequestId": string;
        "StartTime": string;
        "EndTime": string;
    }>;
    /**
    * 调用DescribeDomainRealTimeReqHitRateData获取域名1分钟粒度请求命中率数据。
    */ DescribeDomainRealTimeReqHitRateData(query: {
        "RegionId"?: string;
        /**
        * 加速域名。
        * @example `test.test.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 起始时间，日期格式按照ISO8601表示法，并使用UTC时间。
        * @example `2016-10-20T04:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间，日期格式按照ISO8601表示法，并使用UTC时间。
        * @example `2016-10-20T04:00:00Z`
        */ "EndTime"?: string;
    }): Promise<{
        "Data": {
            "ReqHitRateModel": {
                "TimeStamp": string;
                "ReqHitRate": number;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用StopCdnDomain停用某个加速域名，将DomainStatus变更为Offline。
    */ StopCdnDomain(query: {
        "RegionId"?: string;
        /**
        * 需要接入CDN的域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调DescribeDomainAverageResponseTime获取加速域名的平均响应时间。
    */ DescribeDomainAverageResponseTime(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 是否自适应计算interval值，如果timeMerge=1，会根据startTime和endTime计算出合适的inteval值，和interval参数任选。
        * @example `1`
        */ "TimeMerge"?: string;
        /**
        * 域名类型。
        * @example `domaintyoe`
        */ "DomainType"?: string;
        /**
        * 如果参数为空，默认返回所有加速域名合并后数据。
        * 可以输入需要查询的加速域名。支持批量域名查询，多个域名用逗号（,）分隔。
        * @example `example.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。
        * - 格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟，不写默认读取过去24小时数据。
        * @example `2015-12-10T20:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据的结束时间点。结束时间需大于起始时间。
        * - 获取日期格式按照ISO8601表示法，并使用UTC时间。
        * - 格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-12-10T21:00:00Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持**300**、 **3600**和**86400**秒。
        * - 3天以内（不包含3天整）支持**300**、**3600**、 **86400**。
        * - 3-31天（不包含31天整）支持**3600**和**86400**。
        * - 31天以上支持**86400**。
        * 不传和传的值不支持时，使用默认值。
        * @example `300`
        */ "Interval"?: string;
        /**
        * 运营商英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，不传为所有运营商。
        * @example `unicom`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，不传为所有区域。
        * @example `beijing`
        */ "LocationNameEn"?: string;
    }): Promise<{
        "DomainName": string;
        "RequestId": string;
        "StartTime": string;
        "EndTime": string;
        "DataInterval": string;
        "AvgRTPerInterval": {
            "DataModule": {
                "TimeStamp": string;
                "Value": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeUserDomains查询用户名下所有的域名与状态。支持域名模糊匹配过滤和域名状态过滤。
    */ DescribeUserDomains(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 分页大小。默认值：**20**；最大值：**50**。取值：**1**~**50**之间的任意整数。
        * @example `5`
        */ "PageSize"?: number;
        /**
        * 取得第几页，取值范围：**1**~**100000**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 域名模糊匹配过滤。
        * @example `example.com`
        */ "DomainName"?: string;
        /**
        * 域名状态过滤。
        * @example `configure_failed`
        */ "DomainStatus"?: string;
        /**
        * 域名查询类型。
        * - **fuzzy_match**：模糊匹配。
        * - **pre_match**：前匹配。
        * - **suf_match**：后匹配。
        * - **full_match**：完全匹配。
        * 默认：**fuzzy_match**。
        * @example `fuzzy_match`
        */ "DomainSearchType"?: string;
        /**
        * CDN业务类型，多个用逗号（,）隔开。
        * @example `download，web，video，video，video`
        */ "CdnType"?: string;
        /**
        * 检查domain是否展出。
        * @example `false`
        */ "CheckDomainShow"?: boolean;
        /**
        * 资源组ID。
        * @example `abcd1234abcd1234`
        */ "ResourceGroupId"?: string;
        "ChangeStartTime"?: string;
        "ChangeEndTime"?: string;
        /**
        * funcid，如图片鉴黄功能98。
        * @example `98`
        */ "FuncId"?: string;
        /**
        * 过滤，支持**config**和**unconfig**。
        * - **config**：开通了funcid。
        * - **unconfig**：未开通funcid。
        * @example `config`
        */ "FuncFilter"?: string;
        "Tag"?: string[];
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "Domains": {
            "PageData": {
                "CdnType": string;
                "DomainStatus": string;
                "DomainName": string;
                "GmtModified": string;
                "GmtCreated": string;
                "Description": string;
                "ResourceGroupId": string;
            }[];
        };
    }>;
    /**
    * 调用CreateUsageDetailDataExportTask创建用量详细数据导出任务，将详细用量生成excel文件用于下载。
    */ CreateUsageDetailDataExportTask(query: {
        "RegionId"?: string;
        /**
        * 获取数据起始时间点。
        * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-12-10T20:00:00Z`
        */ "StartTime": string;
        /**
        * 获取数据结束时间点。结束时间需大于起始时间。
        * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-12-10T21:00:00Z`
        */ "EndTime": string;
        /**
        * 需要获取的用量类型：**flow**或**vas**。
        * @example `flow`
        */ "Type": string;
        "OwnerId"?: number;
        /**
        * 域名组信息。如果该信息不为空，则忽略DomainNames字段。
        * @example `xxx`
        */ "Group"?: string;
        /**
        * 如果域名组为空，则以该字段提供的域名为准导出数据。
        * 如果未填写该参数，则导出用户维度数据。
        * @example `example.com`
        */ "DomainNames"?: string;
        /**
        * 任务名称。
        * @example `刷新`
        */ "TaskName"?: string;
        /**
        * 导出文件的语言，支持**zh-cn**和**en-us**，分别为简体中文和英文，默认为中文**zh-cn**。
        * @example `en`
        */ "Language"?: string;
    }): Promise<{
        "RequestId": string;
        "StartTime": string;
        "EndTime": string;
        "TaskId": string;
    }>;
    /**
    * 调用DescribeDomainTrafficData获取加速域名的网络流量监控数据，单位：byte。
    */ DescribeDomainTrafficData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 如果参数为空，默认返回所有加速域名合并后数据。
        * 可输入需要查询的加速域名。支持批量域名查询，多个域名用逗号（,）分隔。
        * @example `example.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟，不写默认读取过去24小时数据。
        * @example `2015-12-10T20:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-12-10T21:00:00Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持300、 3600和86400秒。
        * - 3天以内（不包含3天整）支持**300**、**3600**、 **86400**。
        * - 3-31天（不包含31天整）支持**3600**和**86400**。
        * - 31天以上支持**86400**。
        * 不传和传的值不支持时，使用默认值。
        * @example `300`
        */ "Interval"?: string;
        /**
        * 运营商英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，如果不填该参数，返回所有运营商。
        * @example `beijing`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，如果不填该参数，返回所有区域。
        * @example `unicom`
        */ "LocationNameEn"?: string;
    }): Promise<{
        "DomainName": string;
        "DataInterval": string;
        "TrafficDataPerInterval": {
            "DataModule": {
                "TimeStamp": string;
                "Value": string;
                "DomesticValue": string;
                "OverseasValue": string;
                "HttpsValue": string;
                "HttpsDomesticValue": string;
                "HttpsOverseasValue": string;
            }[];
        };
        "RequestId": string;
        "StartTime": string;
        "EndTime": string;
    }>;
    /**
    * 调用UntagResources删除资源标签。
    */ UntagResources(query: {
        /**
        * 地域ID。
        * @example `ch-shanghai`
        */ "RegionId"?: string;
        /**
        * 固定值：**DOMAIN**。
        * @example `DOMAIN`
        */ "ResourceType": string;
        "TagKey": string[];
        "OwnerId"?: number;
        "ResourceId": string[];
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDomainTopUrlVisit获取加速域名某天内的热门URL列表。
    */ DescribeDomainTopUrlVisit(query: {
        "RegionId"?: string;
        /**
        * 只支持单个域名查询。
        * 如果该参数为空，默认返回所有加速域名合并后数据。
        * @example `test.test.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 开始获取数据的时间点。
        * - 格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 查询某天的数据，建议传YYYY-MM-DDT16:00:00Z。
        * - 不写默认读取过去24小时数据。
        * @example `2018-10-03T16:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2018-10-03T16:00:00Z`
        */ "EndTime"?: string;
        /**
        * 排序方式，支持**traf**和**pv**，默认**pv**。
        * @example `pv`
        */ "SortBy"?: string;
    }): Promise<{
        "Url300List": {
            "TopUrlVisitModel": any[];
        };
        "AllUrlList": {
            "UrlList": {
                "VisitData": string;
                "UrlDetail": string;
                "VisitProportion": number;
                "Flow": string;
                "FlowProportion": number;
            }[];
        };
        "Url400List": {
            "UrlList": {
                "VisitData": string;
                "UrlDetail": string;
                "VisitProportion": number;
                "Flow": string;
                "FlowProportion": number;
            }[];
        };
        "RequestId": string;
        "DomainName": string;
        "Url200List": {
            "UrlList": {
                "VisitData": string;
                "UrlDetail": string;
                "VisitProportion": number;
                "Flow": string;
                "FlowProportion": number;
            }[];
        };
        "StartTime": string;
        "Url500List": {
            "UrlList": {
                "VisitData": string;
                "UrlDetail": string;
                "VisitProportion": number;
                "Flow": string;
                "FlowProportion": number;
            }[];
        };
    }>;
    /**
    * 调用DescribeTagResources查询资源对应的标签。
    */ DescribeTagResources(query: {
        /**
        * 地域ID。
        * @example `ch-hangzhou`
        */ "RegionId"?: string;
        /**
        * 固定值：**DOMAIN**。
        * @example `DOMAIN`
        */ "ResourceType": string;
        "OwnerId"?: number;
        "ResourceId": string[];
        "Tag"?: string[];
        "Scope"?: string;
    }): Promise<{
        "TagResources": {
            "ResourceId": string;
            "Tag": {
                "Value": string;
                "Key": string;
            }[];
        }[];
        "RequestId": string;
    }>;
    /**
    * 调用DeleteUsageDetailDataExportTask删除用量详细数据导出任务。
    */ DeleteUsageDetailDataExportTask(query: {
        "RegionId"?: string;
        /**
        * 任务ID。
        * @example `10`
        */ "TaskId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDomainRealTimeQpsData获取域名1分钟粒度每秒访问次数数据。
    */ DescribeDomainRealTimeQpsData(query: {
        "RegionId"?: string;
        /**
        * 加速域名。
        * @example `test.test.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 运营商英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，不传为所有运营商。
        * @example `telecom`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，不传为所有区域。
        * @example `beijing`
        */ "LocationNameEn"?: string;
        /**
        * 起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。
        * - 不填默认查询从EndTime起一小时内的数据。
        * @example `2016-10-20T04:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。
        * - 不填默认查询从StartTime起一小时内的数据。
        * @example `2016-10-20T04:00:00Z`
        */ "EndTime"?: string;
    }): Promise<{
        "Data": {
            "QpsModel": {
                "TimeStamp": string;
                "Qps": number;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDomainsUsageByDay获取加速域名天粒度监控统计数据。
    */ DescribeDomainsUsageByDay(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 需要查询的加速域名，只支持一个域名，不写代表查询当前用户下所有域名。
        * @example `www.yourdomain.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2017-12-21T08:00:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点，结束时间需大于起始时间。
        * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2017-12-22T08:00:00:00Z`
        */ "EndTime"?: string;
    }): Promise<{
        "UsageTotal": {
            "RequestHitRate": string;
            "MaxSrcBpsTime": string;
            "MaxBps": string;
            "MaxSrcBps": string;
            "TotalTraffic": string;
            "TotalAccess": string;
            "MaxBpsTime": string;
            "BytesHitRate": string;
        };
        "DataInterval": string;
        "UsageByDays": {
            "UsageByDay": {
                "TimeStamp": string;
                "RequestHitRate": string;
                "MaxSrcBpsTime": string;
                "MaxSrcBps": string;
                "MaxBps": string;
                "TotalTraffic": string;
                "TotalAccess": string;
                "MaxBpsTime": string;
                "Qps": string;
                "BytesHitRate": string;
            }[];
        };
        "RequestId": string;
        "DomainName": string;
        "EndTime": string;
        "StartTime": string;
    }>;
    /**
    * 调用DescribeL2VipsByDomain按域名查询L2节点的回源IP。
    */ DescribeL2VipsByDomain(query: {
        "RegionId"?: string;
        /**
        * 域名，只支持单个域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{
        "Vips": {
            "Vip": string[];
        };
        "RequestId": string;
        "DomainName": string;
    }>;
    /**
    * 调用DescribeDomainPvData获取加速域名最小1小时粒度的PV页面访问统计。
    */ DescribeDomainPvData(query: {
        "RegionId"?: string;
        /**
        * 需要查询的加速域名，只支持一个域名，不写代表查询当前用户下所有域名。
        * @example `test.test.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为1小时，不写默认读取过去24小时数据。
        * @example `2015-11-28T00:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-11-29T00:00:00Z`
        */ "EndTime"?: string;
    }): Promise<{
        "DataInterval": string;
        "RequestId": string;
        "DomainName": string;
        "EndTime": string;
        "PvDataInterval": {
            "UsageData": {
                "TimeStamp": string;
                "Value": string;
            }[];
        };
        "StartTime": string;
    }>;
    DescribeDomainMax95BpsData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DomainName"?: string;
        "StartTime"?: string;
        "EndTime"?: string;
    }): Promise<{}>;
    SetHttpErrorPageConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "ErrorCode": string;
        "PageUrl": string;
        "OwnerId"?: number;
        "ConfigId"?: number;
    }): Promise<{}>;
    AddFCTrigger(query: {
        "RegionId"?: string;
        "TriggerARN": string;
        "EventMetaName": string;
        "EventMetaVersion": string;
        "SourceARN": string;
        "RoleARN": string;
        "Notes": string;
        "OwnerId"?: number;
        "FunctionARN"?: string;
    }): Promise<{}>;
    BatchDeleteCdnDomainConfig(query: {
        "RegionId"?: string;
        "DomainNames": string;
        "FunctionNames": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DeleteFCTrigger(query: {
        "RegionId"?: string;
        "TriggerARN": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeCdnRegionAndIsp(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeCdnTypes(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeDomainCertificateInfo(query: {
        "RegionId"?: string;
        "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeDomainCname(query: {
        "RegionId"?: string;
        "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeDomainPathData(query: {
        "RegionId"?: string;
        "DomainName": string;
        "OwnerId"?: number;
        "PageNumber"?: number;
        "PageSize"?: number;
        "Path"?: string;
        "StartTime"?: string;
        "EndTime"?: string;
    }): Promise<{}>;
    DescribeDomainQpsDataByLayer(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DomainName"?: string;
        "StartTime"?: string;
        "EndTime"?: string;
        "Interval"?: string;
        "IspNameEn"?: string;
        "LocationNameEn"?: string;
        "Layer"?: string;
    }): Promise<{}>;
    DescribeFCTrigger(query: {
        "RegionId"?: string;
        "TriggerARN": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeIpInfo(query: {
        "RegionId"?: string;
        "IP": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeUserConfigs(query: {
        "RegionId"?: string;
        "Config": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    ModifyDomainCustomLogConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "ConfigId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    ModifyFileCacheExpiredConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "ConfigID": string;
        "CacheContent": string;
        "TTL": string;
        "OwnerId"?: number;
        "Weight"?: string;
    }): Promise<{}>;
    ModifyHttpHeaderConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "HeaderKey": string;
        "HeaderValue": string;
        "ConfigID": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    OpenCdnService(query: {
        "RegionId"?: string;
        "InternetChargeType": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    SetCcConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "OwnerId"?: number;
        "AllowIps"?: string;
        "BlockIps"?: string;
    }): Promise<{}>;
    SetDomainGreenManagerConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    SetErrorPageConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "PageType": string;
        "OwnerId"?: number;
        "CustomPageUrl"?: string;
    }): Promise<{}>;
    SetFileCacheExpiredConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "CacheContent": string;
        "TTL": string;
        "OwnerId"?: number;
        "Weight"?: string;
    }): Promise<{}>;
    SetForceRedirectConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "RedirectType": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    SetForwardSchemeConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "SchemeOrigin": string;
        "SchemeOriginPort": string;
        "OwnerId"?: number;
        "ConfigId"?: number;
    }): Promise<{}>;
    SetHttpHeaderConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "HeaderKey": string;
        "HeaderValue": string;
        "OwnerId"?: number;
        "ConfigId"?: number;
    }): Promise<{}>;
    SetHttpsOptionConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "Http2": string;
        "OwnerId"?: number;
        "ConfigId"?: number;
    }): Promise<{}>;
    SetIgnoreQueryStringConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "OwnerId"?: number;
        "ConfigId"?: number;
        "HashKeyArgs"?: string;
        "KeepOssArgs"?: string;
    }): Promise<{}>;
    SetIpAllowListConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "AllowIps": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    SetIpBlackListConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "BlockIps": string;
        "OwnerId"?: number;
        "ConfigId"?: number;
    }): Promise<{}>;
    SetL2OssKeyConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "PrivateOssAuth": string;
        "OwnerId"?: number;
        "ConfigId"?: number;
    }): Promise<{}>;
    SetOptimizeConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "OwnerId"?: number;
        "ConfigId"?: number;
    }): Promise<{}>;
    SetPageCompressConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "OwnerId"?: number;
        "ConfigId"?: number;
    }): Promise<{}>;
    SetRangeConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "OwnerId"?: number;
        "ConfigId"?: number;
    }): Promise<{}>;
    SetRefererConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "ReferType": string;
        "OwnerId"?: number;
        "ReferList"?: string;
        "AllowEmpty"?: string;
        "DisableAst"?: string;
    }): Promise<{}>;
    SetRemoveQueryStringConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "AliRemoveArgs": string;
        "OwnerId"?: number;
        "ConfigId"?: number;
        "KeepOssArgs"?: string;
    }): Promise<{}>;
    SetReqAuthConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "AuthType": string;
        "OwnerId"?: number;
        "Key1"?: string;
        "Key2"?: string;
        "TimeOut"?: string;
        "AuthRemoteDesc"?: string;
    }): Promise<{}>;
    SetReqHeaderConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "Key": string;
        "Value": string;
        "OwnerId"?: number;
        "ConfigId"?: number;
    }): Promise<{}>;
    SetSourceHostConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "OwnerId"?: number;
        "BackSrcDomain"?: string;
    }): Promise<{}>;
    SetVideoSeekConfig(query: {
        "RegionId"?: string;
        "DomainName": string;
        "OwnerId"?: number;
        "ConfigId"?: number;
    }): Promise<{}>;
    UpdateFCTrigger(query: {
        "RegionId"?: string;
        "TriggerARN": string;
        "OwnerId"?: number;
        "SourceARN"?: string;
        "FunctionARN"?: string;
        "RoleARN"?: string;
        "Notes"?: string;
    }): Promise<{}>;
    BatchStopCdnDomain(query: {
        "RegionId"?: string;
        "DomainNames": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    SetUserGreenManagerConfig(query: {
        "RegionId"?: string;
        "Quota": string;
        "Ratio": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeDomainRealTimeDetailData(query: {
        "RegionId"?: string;
        "DomainName": string;
        "StartTime": string;
        "EndTime": string;
        "Field": string;
        "OwnerId"?: number;
        "LocationNameEn"?: string;
        "IspNameEn"?: string;
        "Merge"?: string;
    }): Promise<{}>;
}
export default CDN;

interface CreateSiteMonitorRequest {
    "RegionId"?: string;
    /**
    * 任务的类型，目前站点监控探测的有：HTTP 、PING 、TCP 、UDP 、DNS 、SMTP 、POP3 、FTP。
    * @example `HTTP`
    */ "TaskType": string;
    /**
    * 监控的任务名为4-100位长度的中英文字符数字、下划线以及汉字。
    * @example `网站探测`
    */ "TaskName": string;
    /**
    * 任务的探测URL地址或IP地址。
    * @example `http://www.aliyun.com`
    */ "Address": string;
    /**
    * 探测频率，单位为分钟，取值范围1、5、15，单位是分钟，默认值为1分钟。
    * @example `1`
    */ "Interval"?: string;
    /**
    * 探针的信息， 格式为jsonArray，例如`[{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]`（分别对应北京、杭州、青岛)
    * 可以使用 DescribeISPAreaCity 接口获取探测点信息。如果为空系统则随机选择3个探点探测。
    *
    * @example `[{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]`
    */ "IspCities"?: string;
    /**
    * 监控对应协议的高级扩展选项， 不同的探测协议类型对应不同的扩展选项。
    * @example `{"time_out":5000}`
    */ "OptionsJson"?: string;
    /**
    * 关联已存在的报警规则ID。
    * @example `49f7c317-7645-4cc9-94fd-ea42e122****`
    */ "AlertIds"?: string;
}
export { CreateSiteMonitorRequest };
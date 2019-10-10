interface ModifySiteMonitorRequest {
    "RegionId"?: string;
    /**
    * 站点监控探测任务ID。
    * @example `49f7b317-7645-4cc9-94fd-ea42e522****`
    */ "TaskId": string;
    /**
    * 任务的探测URL地址或IP地址。
    * @example `http://www.aliyun.com`
    */ "Address"?: string;
    /**
    * 站点监控探测任务名称，为4-100位长度的英文字符、数字、下划线以及汉字。
    * @example `网站探测修改`
    */ "TaskName"?: string;
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
    * 监控对应协议的高级扩展选项， 不同的探测协议类型，有不同的扩展选项。
    * @example `{"time_out":5000}`
    */ "OptionsJson"?: string;
    /**
    * 关联已存在的报警规则ID。
    * @example `49f7c317-7645-4cc9-94fd-ea42e122****`
    */ "AlertIds"?: string;
}
export { ModifySiteMonitorRequest };
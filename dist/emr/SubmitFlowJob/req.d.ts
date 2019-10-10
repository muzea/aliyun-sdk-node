interface SubmitFlowJobRequest {
    /**
    * 集群ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 项目ID。
    * @example `FP-3535FE0BE5224A47`
    */ "ProjectId": string;
    /**
    * 作业ID。
    * @example `FJ-1A2FB31D82954C64`
    */ "JobId": string;
    /**
    * 集群ID。
    * @example `C-F32FB31D82954C64`
    */ "ClusterId": string;
    /**
    * 工作流运行所在的机器**hostName**。支持**Master**和**Gateway**机器。**hostname**格式为**emr-header-1.cluster-12345**。可登陆机器用**hostname**命令查看对应的值。
    * @example `emr-header-1.cluster-12345`
    */ "HostName"?: string;
    /**
    * 配置参数信息：{"key1":"value1"}。**key**为**params**的参数值会覆盖实际作业中运行的内容。
    * @example `{"key":"value"}`
    */ "Conf"?: string;
}
export { SubmitFlowJobRequest };
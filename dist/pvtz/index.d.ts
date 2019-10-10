import { CheckZoneNameRequest } from "./CheckZoneName/req";
import { CheckZoneNameResponse } from "./CheckZoneName/res";
import { DescribeUserServiceStatusRequest } from "./DescribeUserServiceStatus/req";
import { DescribeUserServiceStatusResponse } from "./DescribeUserServiceStatus/res";
import { SetZoneRecordStatusRequest } from "./SetZoneRecordStatus/req";
import { SetZoneRecordStatusResponse } from "./SetZoneRecordStatus/res";
import { AddZoneRequest } from "./AddZone/req";
import { AddZoneResponse } from "./AddZone/res";
import { DescribeZoneInfoRequest } from "./DescribeZoneInfo/req";
import { DescribeZoneInfoResponse } from "./DescribeZoneInfo/res";
import { SetProxyPatternRequest } from "./SetProxyPattern/req";
import { SetProxyPatternResponse } from "./SetProxyPattern/res";
import { DeleteZoneRequest } from "./DeleteZone/req";
import { DeleteZoneResponse } from "./DeleteZone/res";
import { DescribeChangeLogsRequest } from "./DescribeChangeLogs/req";
import { DescribeChangeLogsResponse } from "./DescribeChangeLogs/res";
import { UpdateZoneRemarkRequest } from "./UpdateZoneRemark/req";
import { UpdateZoneRemarkResponse } from "./UpdateZoneRemark/res";
import { UpdateZoneRecordRequest } from "./UpdateZoneRecord/req";
import { UpdateZoneRecordResponse } from "./UpdateZoneRecord/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { AddZoneRecordRequest } from "./AddZoneRecord/req";
import { AddZoneRecordResponse } from "./AddZoneRecord/res";
import { DeleteZoneRecordRequest } from "./DeleteZoneRecord/req";
import { DeleteZoneRecordResponse } from "./DeleteZoneRecord/res";
import { DescribeZonesRequest } from "./DescribeZones/req";
import { DescribeZonesResponse } from "./DescribeZones/res";
import { BindZoneVpcRequest } from "./BindZoneVpc/req";
import { BindZoneVpcResponse } from "./BindZoneVpc/res";
import { DescribeZoneRecordsRequest } from "./DescribeZoneRecords/req";
import { DescribeZoneRecordsResponse } from "./DescribeZoneRecords/res";
import { DescribeRequestGraphRequest } from "./DescribeRequestGraph/req";
import { DescribeRequestGraphResponse } from "./DescribeRequestGraph/res";
import { DescribeZoneVpcTreeRequest } from "./DescribeZoneVpcTree/req";
import { DescribeZoneVpcTreeResponse } from "./DescribeZoneVpcTree/res";
import { DescribeStatisticSummaryRequest } from "./DescribeStatisticSummary/req";
import { DescribeStatisticSummaryResponse } from "./DescribeStatisticSummary/res";

interface PVTZ {
    /**
    * 调用CheckZoneName根据规则校验zone是否可添加。
    */ CheckZoneName(query: CheckZoneNameRequest): Promise<CheckZoneNameResponse>;
    /**
    * 调用DescribeUserServiceStatus查询当前用户的服务状态，例如是否开通服务，是否欠费等。
    */ DescribeUserServiceStatus(query: DescribeUserServiceStatusRequest): Promise<DescribeUserServiceStatusResponse>;
    /**
    * 调用SetZoneRecordStatus设置解析记录状态。
    */ SetZoneRecordStatus(query: SetZoneRecordStatusRequest): Promise<SetZoneRecordStatusResponse>;
    /**
    * 调用AddZone创建private zone。
    */ AddZone(query: AddZoneRequest): Promise<AddZoneResponse>;
    /**
    * 调用DescribeZoneInfo获取指定zone的详细信息。
    */ DescribeZoneInfo(query: DescribeZoneInfoRequest): Promise<DescribeZoneInfoResponse>;
    /**
    * 调用SetProxyPattern设置递归解析代理。
    */ SetProxyPattern(query: SetProxyPatternRequest): Promise<SetProxyPatternResponse>;
    /**
    * 调用DeleteZone删除private zone。
    */ DeleteZone(query: DeleteZoneRequest): Promise<DeleteZoneResponse>;
    /**
    * 调用DescribeChangeLogs获取变更日志。
    */ DescribeChangeLogs(query: DescribeChangeLogsRequest): Promise<DescribeChangeLogsResponse>;
    /**
    * 调用UpdateZoneRemark修改zone的备注信息。
    */ UpdateZoneRemark(query: UpdateZoneRemarkRequest): Promise<UpdateZoneRemarkResponse>;
    /**
    * 调用UpdateZoneRecord修改解析记录。
    */ UpdateZoneRecord(query: UpdateZoneRecordRequest): Promise<UpdateZoneRecordResponse>;
    /**
    * 调用DescribeRegions获取可用地域列表供用户选择。
    */ DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
    * 调用AddZoneRecord添加prviate zone的解析记录。
    */ AddZoneRecord(query: AddZoneRecordRequest): Promise<AddZoneRecordResponse>;
    /**
    * 调用DeleteZoneRecord删除解析记录。
    */ DeleteZoneRecord(query: DeleteZoneRecordRequest): Promise<DeleteZoneRecordResponse>;
    /**
    * 调用DescribeZones查询用户的zone列表。
    */ DescribeZones(query: DescribeZonesRequest): Promise<DescribeZonesResponse>;
    /**
    * 调用BindZoneVpc绑定或者解绑zone与VPC列表两者之间的关系。
    */ BindZoneVpc(query: BindZoneVpcRequest): Promise<BindZoneVpcResponse>;
    /**
    * 调用DescribeZoneRecords查询解析记录列表。
    */ DescribeZoneRecords(query: DescribeZoneRecordsRequest): Promise<DescribeZoneRecordsResponse>;
    DescribeRequestGraph(query: DescribeRequestGraphRequest): Promise<DescribeRequestGraphResponse>;
    DescribeZoneVpcTree(query: DescribeZoneVpcTreeRequest): Promise<DescribeZoneVpcTreeResponse>;
    DescribeStatisticSummary(query: DescribeStatisticSummaryRequest): Promise<DescribeStatisticSummaryResponse>;
}
export default PVTZ;

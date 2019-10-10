import { DescribeDVOrderResultRequest } from "./DescribeDVOrderResult/req";
import { DescribeDVOrderResultResponse } from "./DescribeDVOrderResult/res";
import { CreateUserCertificateRequest } from "./CreateUserCertificate/req";
import { CreateUserCertificateResponse } from "./CreateUserCertificate/res";
import { DescribeUserCertificateDetailRequest } from "./DescribeUserCertificateDetail/req";
import { DescribeUserCertificateDetailResponse } from "./DescribeUserCertificateDetail/res";
import { CreateDVOrderAuditRequest } from "./CreateDVOrderAudit/req";
import { CreateDVOrderAuditResponse } from "./CreateDVOrderAudit/res";
import { DeleteUserCertificateRequest } from "./DeleteUserCertificate/req";
import { DeleteUserCertificateResponse } from "./DeleteUserCertificate/res";
import { DescribeUserCertificateListRequest } from "./DescribeUserCertificateList/req";
import { DescribeUserCertificateListResponse } from "./DescribeUserCertificateList/res";
import { DescribeOrderInstanceListRequest } from "./DescribeOrderInstanceList/req";
import { DescribeOrderInstanceListResponse } from "./DescribeOrderInstanceList/res";

interface CAS {
    /**
    * 调用DescribeDVOrderResult接口查询DV订单的详细信息。
    */ DescribeDVOrderResult(query: DescribeDVOrderResultRequest): Promise<DescribeDVOrderResultResponse>;
    /**
    * 添加证书。
    */ CreateUserCertificate(query: CreateUserCertificateRequest): Promise<CreateUserCertificateResponse>;
    /**
    * 查询单个证书的详细信息。
    */ DescribeUserCertificateDetail(query: DescribeUserCertificateDetailRequest): Promise<DescribeUserCertificateDetailResponse>;
    /**
    * 提交DV订单。
    */ CreateDVOrderAudit(query: CreateDVOrderAuditRequest): Promise<CreateDVOrderAuditResponse>;
    /**
    * 调用DeleteUserCertificate接口删除用户的证书文件。
    */ DeleteUserCertificate(query: DeleteUserCertificateRequest): Promise<DeleteUserCertificateResponse>;
    /**
    * 调用DescribeUserCertificateList接口查询证书列表信息。
    */ DescribeUserCertificateList(query: DescribeUserCertificateListRequest): Promise<DescribeUserCertificateListResponse>;
    /**
    * 查询证书订单实例列表。
    */ DescribeOrderInstanceList(query: DescribeOrderInstanceListRequest): Promise<DescribeOrderInstanceListResponse>;
}
export default CAS;

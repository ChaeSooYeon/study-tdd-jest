import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import {
  LiveStatusButton,
  type TLiveSaleStatus,
} from "../components/live-button";

/**
 * 경매 상태코드는 API에서 내려준다.
1. 경매 전(READY)
  1-1. 비로그인이면
    1-1-1. 문구 :  응찰신청하기/ 정회원만 응찰신청이 가능합니다.
    1-1-2. 클릭 이벤트 : 로그인 페이지 이동
  1-2. 준회원이면
    1-2-1. 문구: 응찰신청하기/ 정회원만 응찰신청이 가능합니다.
    1-2-2. 클릭 이벤트 : 얼럿(정회원만 응찰 신청이 가능합니다)
  1-3. 정회원이면서 패들 미발급상태이면
    1-3-1. 문구: 응찰신청하기/ 정회원만 응찰신청이 가능합니다.
    1-3-2. 클릭 이벤트 : 약관동의 레이어 팝업 노출
  1-4. 정회원이고 패들 발급 상태이면
    1-4-1. 문구 : 라이브 응찰 신청 완료/ 나의 패들번호 : 000
    1-4-2. 클릭 이벤트 : 없음
2. 경매 당일 & 경매 시작 전(BID_END)
  2-1. 비로그인 & 준회원 & 정회원(패들O) & 정회원(패들X)
    2-1-1. 문구 : 라이브 경매준비중 / MM/DD(DDD) HH:mm KST에 시작합니다
3. 경매 당일 & 경매 시작 후(LIVE_ING)
	3-1. 비로그인
		3-1-1. 문구 : 라이브 경매 보기 / 사전 신청한 회원만 응찰 가능합니다.
		3-1-2. 클릭 이벤트 : 라이브 스트리밍 비회원용 페이지로 새창 이동
	3-2. 준회원 & 정회원(패들 X)
		3-2-1. 문구 : 라이브 경매 보기 / 사전 신청한 회원만 응찰 가능합니다.
		3-2-2. 클릭 이벤트 : 라이브 응찰 회원페이지로 새창 이동
	3-3. 정회원(패들 O)
		3-3-1. 문구 : 라이브 경매 보기 / 나의 패들번호 : 000
4. 경매 종료(END)
	4-1. 버튼 비노출
*/
describe("라이브경매 우측 상단 버튼 테스트", () => {
  it('경매 상태가 "READY"이면 READY 버튼이 노출 된다.', () => {
    const saleStatus: TLiveSaleStatus = "READY";
    render(<LiveStatusButton saleStatus={saleStatus} />);

    expect(screen.getByText("READY")).toBeInTheDocument();
  });

  it('경매 상태가 "BID_END"이면 BID_END 버튼이 노출 된다.', () => {
    const saleStatus: TLiveSaleStatus = "BID_END";
    render(<LiveStatusButton saleStatus={saleStatus} />);

    expect(screen.getByText("BID_END")).toBeInTheDocument();
  });

  it('경매 상태가 "LIVE_ING"이면 LIVE_ING 버튼이 노출 된다.', () => {
    const saleStatus: TLiveSaleStatus = "LIVE_ING";
    render(<LiveStatusButton saleStatus={saleStatus} />);

    expect(screen.getByText("LIVE_ING")).toBeInTheDocument();
  });

  it('경매 상태가 "END"이면 아무 버튼도 노출 되지 않는다.', () => {
    const saleStatus: TLiveSaleStatus = "END";
    render(<LiveStatusButton saleStatus={saleStatus} />);

    expect(screen.queryByRole("button")).toBeNull();
  });
});

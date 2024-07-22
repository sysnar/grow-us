const Card = () => {
  return (
    <div
      className="grow-card"
      style={{
        background: "#ffffff",
        borderRadius: "8px",
      }}
    >
      <div
        className="grow-card-body"
        style={{
          padding: "20px 24px 8px",
          overflow: "hidden",
          borderRadius: "0 0 8px 8px",
        }}
      >
        <div style={{ float: "left" }}>
          <div>
            <div
              style={{
                height: "22px",
                color: "rgba(0, 0, 0, 0.65)",
                fontSize: "14px",
                lineHeight: "22px",
              }}
            >
              MISSION #1
            </div>
            <div
              style={{
                height: "38px",
                marginTop: "4px",
                marginBottom: "0",
                overflow: "hidden",
                color: "rgba(0, 0, 0, 0.88)",
                fontSize: "24px",
                lineHeight: "38px",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                wordBreak: "break-all",
              }}
            >
              성경의 비밀을 알게된 느낌
            </div>
          </div>

          {/* -------------------------- */}

          <div style={{ height: "46px", position: "relative", marginBottom: "12px" }}>
            <div style={{ position: "absolute", width: "302px", bottom: "0", left: "0" }}>
              <div>
                ㅁㄴㅇㄹㅁㄴㅇㄹㅁㅇㄹ <br />
                ㅁㄴㅇㄹㅁㄴㅁㄴㅁㅁㄴㅇㄹㅁㄴㅇㄹㅁㅇㄹ....
              </div>
            </div>
          </div>

          {/* -------------------------- */}
          <div
            style={{
              marginTop: "8px",
              paddingTop: "9px",
              borderTop: "1px solid rgba(5, 5, 5, 0.06)",
            }}
          >
            2024.07.22 (목)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

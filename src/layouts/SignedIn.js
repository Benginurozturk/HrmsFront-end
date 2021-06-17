import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Dropdown, Icon } from "rsuite";

export default function SignedIn({ signOut }) {
  let checkImage = false;

  const userType = localStorage.getItem("userType");
  const userName = localStorage.getItem("userName");

  return (
    <div style={{ position: "fixed", right: 50, marginTop: -10 }}>
      <Dropdown
        noCaret
        icon={
          checkImage ? (
            <Avatar src="https://thumbs.dreamstime.com/b/merhaba-formal-turkish-word-hello-handwritten-white-background-171060009.jpg" />
          ) : (
            <Avatar src="https://404.error"  />
          )
        }
      >
        <Dropdown.Item icon={<Icon icon="info" />}>Bilgilerim</Dropdown.Item>
        {userType === "employer" ? (
          <>
            <Link to={"ilanlarım"}>
              <Dropdown.Item icon={<Icon icon="list" />}>
                İlanlarım
              </Dropdown.Item>
            </Link>
            <Link to={"ilan-ekle"}>
              <Dropdown.Item icon={<Icon icon="plus-circle" />}>
                İlan Ekle
              </Dropdown.Item>
            </Link>
          </>
        ) : userType === "jobSeeker" ? (
          <Dropdown.Item icon={<Icon icon="info" />}>
            Başvurularım
          </Dropdown.Item>
        ) : (
          <>
            <Dropdown.Item icon={<Icon icon="info" />}>İlanlar</Dropdown.Item>
            <Dropdown.Item icon={<Icon icon="info" />}>
              Başvurular
            </Dropdown.Item>
          </>
        )}

        <Dropdown.Item onClick={signOut} icon={<Icon icon="sign-out" />}>
          Çıkış Yap
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}
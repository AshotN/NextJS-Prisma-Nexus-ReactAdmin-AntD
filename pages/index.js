import Head from "next/head";
import useSWR from "swr";
import MainLayout from "../layouts/mainLayout";
import { Table } from "antd";

const Home = () => {
  const { data } = useSWR(
    `{
    users {
          name
          city
          id
        }}`
  );

  const columns = [
    {
      title: "id",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "City",
      dataIndex: "city",
    },
  ];

  return (
    <MainLayout>
      <Table dataSource={data?.users} columns={columns} rowKey="id" />
    </MainLayout>
  );
};

export default Home;
